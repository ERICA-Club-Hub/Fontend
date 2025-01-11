import styled, { css } from 'styled-components';

// large : 320 x 45
// medium : 280 x 40
// small : 225 x 40

type Size = 'small' | 'medium' | 'large';

interface InputProps {
    value: string;
    placeholder: string;
    size: Size;
    backgroundColor: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    value,
    onChange,
    placeholder,
    size = 'medium',
    backgroundColor = 'gray',
    ...props
}: InputProps) => {
    return (
        <StyledInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            size={size}
            $backgroundColor={backgroundColor}
            {...props}
        />
    );
};

const getSizeStyles = (size: Size) => {
    switch (size) {
        case 'large':
            return css`
                width: 320px;
                height: 45px;
                padding: 14px 17px;
            `;
        case 'medium':
            return css`
                width: 280px;
                height: 40px;
                padding: 11px 15px;
            `;
        case 'small':
            return css`
                width: 225px;
                height: 40px;
                padding: 11.5px 15px;
            `;
    }
};

interface StyledInputProps {
    size: Size;
    $backgroundColor: string;
}

const StyledInput = styled.input<StyledInputProps>`
    ${({ size }) => getSizeStyles(size)}
    border-radius: 10px;

    font-size: 14px;
    font-weight: 400;
    background-color: ${({ $backgroundColor, theme }) =>
        $backgroundColor === 'gray' ? theme.colors.lightGray : '#fff'};
    color: ${({ theme }) => theme.colors.mainBlack};

    &::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.subGray};
    }
`;

export { Input };

import { useState } from 'react';
import styled from 'styled-components';
import HeaderMenuLogo from '@/assets/common/header-menu.svg?react';
import ClosedBtn from '@/assets/common/closed-btn.svg?react';
import NavigateArrow from '@/assets/common/navigate-arrow.svg?react';
import { Link, useNavigate } from 'react-router-dom';
import { navigations } from '@/constants';

const HeaderMenu = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleNavigate = (url: string) => {
        setIsOpen(false);
        navigate(url);
    };

    return (
        <>
            <Container>
                <div>로고</div>
                {isOpen ? (
                    <ClosedBtn
                        width="24"
                        height="24"
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <HeaderMenuLogo onClick={() => setIsOpen(true)} />
                )}

                {/* 드롭다운 매뉴 */}
                <DropdownNavigator $isOpen={isOpen}>
                    <Link to="/admin/login" onClick={() => setIsOpen(false)}>
                        <LoginButton>
                            <h2>어드민 로그인</h2>
                            <NavigateArrow />
                        </LoginButton>
                    </Link>
                    <MenuList>
                        {navigations.map((menu, index) => (
                            <MenuItem
                                key={`navigate-menu-${index}`}
                                onClick={() => handleNavigate(menu.url)}
                            >
                                <h3>{menu.title}</h3>
                                <NavigateArrow />
                            </MenuItem>
                        ))}
                    </MenuList>
                </DropdownNavigator>
            </Container>
        </>
    );
};

export { HeaderMenu };

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    padding: 0 20px;

    background-color: ${(prop) => prop.theme.colors.white};
    cursor: pointer;
    z-index: 100;
`;

const DropdownNavigator = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 55px;
    right: 0px;
    width: 100%;
    height: ${({ $isOpen }) => ($isOpen ? '212px' : '0')};
    padding: ${({ $isOpen }) => ($isOpen ? '20px 36px 30px' : '0 36px')};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    background-color: ${(prop) => prop.theme.colors.white};
    overflow: hidden;
    transition: ${({ $isOpen }) => ($isOpen ? 'all 0.3s ease-in-out' : 'none')};
`;

const LoginButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 30px;

    h2 {
        font-size: 16px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};
        cursor: pointer;
    }
`;

const MenuList = styled.ul`
    width: 288px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: pointer;
`;

const MenuItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17px;

    h3 {
        font-size: 14px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.black};
    }
`;

import Button from '@/components/Common/Button';
import { useState } from 'react';
import styled from 'styled-components';

export default function ResourcesRegisterPage() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
        }
    };
    const removeItem = (index: number) => {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };
    return (
        <Container>
            <CardContainer>
                <CardContent>
                    <CardTitle>자료 제목을 입력해 주세요.</CardTitle>
                    <CardInput placeholder="자료 제목을 정확히 입력해 주세요." />
                </CardContent>
                <CardContent>
                    <CardTitle>자료를 업로드 해주세요.</CardTitle>
                    {selectedFiles.length === 0 ? (
                        <UploadContainer>
                            <HiddenInput onChange={handleFileChange} />
                            <UploadBox>
                                📂 버튼을 클릭해 업로드 해주세요.
                            </UploadBox>
                        </UploadContainer>
                    ) : (
                        <MapContainer>
                            {selectedFiles.map((file, index) => (
                                <MapContainer>
                                    <MapUploadContainer>
                                        <MapUploadBox>
                                            📂 {file.name}
                                        </MapUploadBox>
                                        <RemoveItemBtn
                                            onClick={() => removeItem(index)}
                                        >
                                            X
                                        </RemoveItemBtn>
                                    </MapUploadContainer>
                                </MapContainer>
                            ))}
                            <UploadContainer>
                                <HiddenInput onChange={handleFileChange} />
                                <UploadBox>+ 자료 추가하기</UploadBox>
                            </UploadContainer>
                        </MapContainer>
                    )}
                </CardContent>
            </CardContainer>
            <Button size="small" variant="filled">
                저장하기
            </Button>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 10px;
`;

const CardTitle = styled.span`
    color: black;
    font-weight: 600;
    font-size: 14px;
`;

const CardInput = styled.input`
    background-color: #f7f7f7;
    height: 40px;
    border-radius: 10px;
    text-align: left;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    &::placeholder {
        color: #989898;
    }
`;

const HiddenInput = styled.input.attrs({ type: 'file' })`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;
const UploadBox = styled.div`
    background-color: #f7f7f7;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #989898;
`;
const UploadContainer = styled.div`
    position: relative;
`;

const MapContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MapUploadContainer = styled.div`
    background-color: #f7f7f7;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #989898;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
`;

const MapUploadBox = styled.span`
    font-weight: 500;
    font-size: 12px;
    color: black;
`;

const RemoveItemBtn = styled.button``;

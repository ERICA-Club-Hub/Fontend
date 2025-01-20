// import { useState } from 'react';
import Button from '@/components/Common/Button';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ClubDetailPage = () => {
    const params = useParams();
    const activeTab = 'intro';
    // const [activeTab, setActiveTab] = useState('intro');

    console.log(params.id);
    return (
        <PageContainer>
            <ClubHeader>
                <ClubImage src="/path-to-club-image.png" alt="Club Logo" />
                <div>
                    <div>대학생 IT 개발 연합동아리</div>
                    <ClubTitle>UMC ERICA</ClubTitle>
                    <ClubTags>
                        <Tag>연합동아리</Tag>
                        <Tag>모집중</Tag>
                    </ClubTags>
                </div>
            </ClubHeader>

            <ClubInfo>
                <ClubDetails>
                    <DetailRow>
                        <DetailLabel>대표</DetailLabel>
                        <DetailValue>이름 들어갈 곳</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>연락처</DetailLabel>
                        <DetailValue>연락처 들어갈 곳</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>장기모임</DetailLabel>
                        <DetailValue>어쩌구</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>회비</DetailLabel>
                        <DetailValue>저쩌구</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>SNS</DetailLabel>
                        <DetailValue>@@@</DetailValue>
                    </DetailRow>
                </ClubDetails>
            </ClubInfo>
            <div style={{ margin: '20px' }}>
                <Button size="large">가입 신청하기</Button>
            </div>
            {/* <TabContainer>
                    <TabButton
                        isActive={activeTab === 'intro'}
                        onClick={() => setActiveTab('intro')}
                    >
                        동아리 소개
                    </TabButton>
                    <TabButton
                        isActive={activeTab === 'recruit'}
                        onClick={() => setActiveTab('recruit')}
                    >
                        모집안내
                    </TabButton>
                    <TabButton
                        isActive={activeTab === 'log'}
                        onClick={() => setActiveTab('log')}
                    >
                        활동로그
                    </TabButton>
                </TabContainer> */}

            <TabContent>
                {activeTab === 'intro' && (
                    <div>
                        <h3>✏️ 우리 동아리를 소개합니다!</h3>
                        {/* 동아리 소개 내용 */}
                    </div>
                )}

                {/* {activeTab === 'recruit' && ( */}
                {/* <div> */}
                {/* <h3>📅 모집기간</h3> */}
                {/* 모집 관련 내용 */}
                {/* </div> */}
                {/* )} */}
                {/* {activeTab === 'log' && ( */}
                <LogGrid>활동 로그 이미지들</LogGrid>
                {/* )} */}
            </TabContent>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    //
    min-width: 320px;
    margin: 0 auto;
    padding: 20px;
`;

const ClubHeader = styled.div`
    background: white;
    display: flex;
    padding: 20px;
    margin-bottom: 24px;
    border-radius: 10px;
`;

const ClubImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background-color: black;
`;

const ClubInfo = styled.div`
    border-radius: 10px;
    background-color: blue;
    flex: 1;
`;

const ClubTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const ClubTags = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`;

const Tag = styled.span`
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    background-color: red;
`;

const ClubDetails = styled.div`
    display: grid;
    gap: 8px;
`;

const DetailRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const DetailLabel = styled.span`
    color: #666;
    min-width: 80px;
`;

const DetailValue = styled.span`
    color: #333;
`;

// const TabContainer = styled.div`
//     display: flex;
//     border-bottom: 1px solid #e2e8f0;
//     margin-bottom: 24px;
// `;

// const TabButton = styled.button`
//     flex: 1;
//     padding: 12px;
//     background: none;
//     border: none;
//     border-bottom: 2px solid
//         /* ${(props) => (props.isActive ? '#4299e1' : 'transparent')};
//     color: ${(props) => (props.isActive ? '#4299e1' : '#666')};
//     font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')}; */
//     cursor: pointer;
// `;

const TabContent = styled.div`
    padding: 16px 0;
`;

const LogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

export { ClubDetailPage };

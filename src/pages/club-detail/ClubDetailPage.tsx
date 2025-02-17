import { useEffect, useState } from 'react';
import Button from '@/components/Common/Button';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../src/assets/react.svg';
import sns from '../../assets/common/sns.svg';
import jjang from '../../assets/common/jjang.svg';
import card from '../../assets/common/card.svg';
import phone from '../../assets/common/phone.svg';
import label from '../../assets/common/label.svg';
import TabContents from './TabContents';
import { apiRequest } from '@/api/axios';

// tab 항목에서 활성화 여부를 판단할 props
interface TabButtonProps {
    $isActive?: boolean;
}

// 받을 정보 : id, 이미지, 이름, 태그, 모집상태, 대표, 연락처, 정기모임, 회비, sns, 소개 정보, 모집안내, 활동로그

type activeTab = 'intro' | 'recruit' | 'log';

type recuirementStatus = 'recruiting' | 'upcomming' | 'close'; // 이거 타입명 수정해야함

interface clubInfoSummation {
    name: string | null;
    description: string | null;
    category: string[] | null;
    leaderName: string | null;
    leaderPhone: string | null;
    activities: string | null;
    membershipFee: string | null;
    snsUrl: string | null;
    recruitmentStatus: recuirementStatus | null;
    applicationUrl?: string | null;
}

const ClubDetailPage = () => {
    const [clubDetail, setClubDetail] = useState<clubInfoSummation>();
    const params = useParams();
    const id = params.id?.toString() || '';
    useEffect(() => {
        const getClubDetail = async (id: string) => {
            const response = await apiRequest({ url: `/api/clubs/${id}` });
            if (response) {
                setClubDetail({
                    name: response.result.name || '없음',
                    description: response.result.description || '없음',
                    category: response.result.category || '없음',
                    leaderName: response.result.leaderName || '없음',
                    leaderPhone: response.result.leaderPhone || '없음',
                    activities: response.result.activities || '없음',
                    membershipFee: response.result.membershipFee || '없음',
                    snsUrl: response.result.snsUrl || '없음',
                    recruitmentStatus:
                        response.result.recruitmentStatus || '없음',
                    applicationUrl: response.result.applicationUrl || '없음',
                });
            }
        };
        if (id) {
            getClubDetail(id);
        }
    }, [id]);
    const getRecruitState = () => {
        if (clubDetail?.recruitmentStatus === 'recruiting') {
            return '모집중';
        } else if (clubDetail?.recruitmentStatus === 'upcomming') {
            return '모집 예정';
        } else {
            return '모집 마감';
        }
    };
    const [activeTab, setActiveTab] = useState<activeTab>('intro');
    return (
        <PageContainer>
            <ClubHeader>
                <ClubImage src={logo} alt="Club Logo" />
                <PreviewWrapper>
                    <Preview>{clubDetail?.description}</Preview>
                    <ClubTitle>{clubDetail?.name}</ClubTitle>
                    <ClubTags>
                        <Tag>{clubDetail?.category}</Tag>
                        <RecruitState>{getRecruitState()}</RecruitState>
                    </ClubTags>
                </PreviewWrapper>
            </ClubHeader>

            <ClubInfo>
                <ClubDetails>
                    <h3>동아리 정보 요약</h3>
                    <DividHr />
                    <DetailRow>
                        <IconImage src={jjang} alt="" />
                        <DetailLabel>대표</DetailLabel>
                        <DetailValue>{clubDetail?.leaderName}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <IconImage src={phone} alt="" />
                        <DetailLabel>연락처</DetailLabel>
                        <DetailValue>{clubDetail?.leaderPhone}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <IconImage src={label} alt="" />
                        <DetailLabel>정기모임</DetailLabel>
                        <DetailValue>{clubDetail?.activities}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <IconImage src={card} alt="" />
                        <DetailLabel>회비</DetailLabel>
                        <DetailValue>{clubDetail?.membershipFee}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <IconImage src={sns} alt="" />
                        <DetailLabel>SNS</DetailLabel>
                        <DetailValue>{clubDetail?.snsUrl}</DetailValue>
                    </DetailRow>
                </ClubDetails>
            </ClubInfo>
            <Button
                disabled={clubDetail?.recruitmentStatus === 'recruiting'}
                onClick={() => {
                    if (clubDetail?.applicationUrl) {
                        window.open(clubDetail.applicationUrl, '_blank');
                    }
                }}
                size="large"
            >
                가입 신청하기
            </Button>
            <TabContainer>
                <TabButton
                    onClick={() => setActiveTab('intro')}
                    $isActive={activeTab === 'intro'}
                >
                    동아리 소개
                </TabButton>
                <TabButton
                    onClick={() => setActiveTab('recruit')}
                    $isActive={activeTab === 'recruit'}
                >
                    모집안내
                </TabButton>
                <TabButton
                    onClick={() => setActiveTab('log')}
                    $isActive={activeTab === 'log'}
                >
                    활동로그
                </TabButton>
            </TabContainer>

            <TabContents clubId={id} activeTab={activeTab}></TabContents>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
`;

const ClubHeader = styled.div`
    width: 320px;
    height: 104px;
    background: white;
    display: flex;
    padding: 17px;
    margin-bottom: 8px;
    border-radius: 10px;
`;

const ClubImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-right: 21px;
`;

const PreviewWrapper = styled.div``;

const ClubInfo = styled.div`
    width: 320px;
    height: 201px;
    border-radius: 10px;
    background-color: white;
    flex: 1;
    margin-bottom: 8px;
`;

const Preview = styled.div``;

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
    height: 18px;
    padding: 2px 5px 2px 5px;
    border-radius: 4px;
    font-size: 12px;
    background-color: #eef4ff;
    color: #33639c;
`;

const RecruitState = styled.span`
    min-width: 42px;
    height: 18px;
    padding: 2px 5px 2px 5px;
    border-radius: 5pc;
    font-size: 12px;
    background-color: #fff4e4;
    color: #f08a00;
`;

const ClubDetails = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const DividHr = styled.hr`
    border: none;
    height: 0.5px;
    background-color: rgba(234, 234, 234, 1);
`;

const IconImage = styled.img`
    width: 15px;
    height: 15px;
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

const TabContainer = styled.div`
    width: 320px;
    display: flex;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 9px;
    justify-content: center;
`;

const TabButton = styled.button<TabButtonProps>`
    flex: 1;
    width: auto;
    padding-top: 24px;
    padding-bottom: 7px;
    background: none;
    border: none;
    border-bottom: 2px solid
        ${(props) => (props.$isActive ? '#4299e1' : 'transparent')};
    color: ${(props) => (props.$isActive ? '#4299e1' : '#666')};
    font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
    cursor: pointer;
`;

export { ClubDetailPage };

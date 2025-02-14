// import { getAccessToken } from '@/api/auth/token';
import { apiRequest } from '@/api/axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IntroProps {
    clubId: string;
}

interface Schedule {
    month: string;
    content: string;
}

const schedules: Schedule[] = [
    { month: '3월', content: '3월에 할것' },
    { month: '4월', content: '4월에 할것' },
    { month: '6월', content: '6월에 할것' },
    { month: '7월', content: '7월에 할것' },
    { month: '8월', content: '8월에 할것' },
];

export default function Intro({ clubId }: IntroProps) {
    // const [data, setData] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // const fetchTest = async () => {
        //     try {
        //         const response = await apiRequest({
        //             url: '/api/documents',
        //         });
        //         setData(response);
        //     } catch (error) {
        //         console.error('실패:', error);
        //     }
        // };
        const fetchTest2 = async () => {
            try {
                const response = await apiRequest({
                    url: '/api/users/login',
                    method: 'POST',
                    data: { code: 'A3T78H' },
                    requireToken: false,
                });
                setUserInfo(response);
                console.log(userInfo);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTest2();
        // fetchTest();
    }, [clubId]);
    // console.log('동아리 소개에서', clubId, userInfo);
    // console.log('토큰은:', getAccessToken());
    // 여기 주석 지우면 응답값 확인 가능
    return (
        <div>
            <Container>
                <Title>🎯 주요 연간일정</Title>
                <ScheduleContents>
                    {schedules.map((schedule) => (
                        <ContentsRow key={schedule.month}>
                            <ContentsLabel>{schedule.month}</ContentsLabel>
                            <ContentsValue>{schedule.content}</ContentsValue>
                        </ContentsRow>
                    ))}
                </ScheduleContents>
            </Container>
            <Container>
                <ContentBlock>
                    <Title>🔍 우리 동아리를 소개합니다!</Title>
                    <ContentSpan>
                        {`첫 번째 줄입니다.
                        두 번째 줄입니다. 칸이 넘어가면 다음줄로 넘어갑니다아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
                        
                        두 줄 띄우고 세 번째 줄입니다.`}
                    </ContentSpan>
                </ContentBlock>
                <ContentBlock>
                    <Title>👀 이런 활동을 할 수 있어요!</Title>
                    <ContentSpan></ContentSpan>
                </ContentBlock>
                <ContentBlock>
                    <Title>🔥 너, 내 동료가 돼라!</Title>
                    <ContentSpan></ContentSpan>
                </ContentBlock>
            </Container>
        </div>
    );
}

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 328px;
    margin-bottom: 7px;
`;
const Title = styled.div`
    margin-top: -5px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
`;
const ScheduleContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const ContentsRow = styled.div`
    display: flex;
`;
const ContentBlock = styled.div`
    width: 278px;
    margin-bottom: 25px;
`;
const ContentSpan = styled.span`
    white-space: pre-line;
    font-size: 14px;
    color: #606060;
`;
const ContentsLabel = styled.span`
    display: flex;
    background-color: #eef4ff;
    border-radius: 100px;
    width: 35px;
    height: 20px;
    justify-content: center;
    align-items: center;
    color: #33639c;
    font-size: 12px;
    font-weight: 600;
`;
const ContentsValue = styled.span`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    margin-top: 1px;
    margin-left: 7px;
`;

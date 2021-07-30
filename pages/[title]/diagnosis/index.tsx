import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ProgressBar } from 'components/ProgressBar';
import Header from 'components/Header';
import { YAMAGUCHI_QUESTIONS } from 'consts/texts';
import { textM } from 'consts/layout';

const TotalWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: lightblue;
    flex: 1;
`;

const ContentsWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const QuestionWrapper = styled.div`
    width: 100%;
    justify-content: center;
    flex-direction: column;
`;

const QuestionText = styled.p`
    font-size: 24px;
    font-weight: bold;
`;

const OptionWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
`;

const OptionNumWrapper = styled.div`
    background: #0099ff;
    padding-left: 4px;
    width: 5%;
`;

const OptionDescriptionWrapper = styled.div`
    cursor: pointer;
    background: white;
    padding-left: 6px;
    width: 95%;
`;

const Title = styled.div`
    ${textM};
    margin: 8px 0;
`;

export default function Quiz() {
    const router = useRouter();
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [totalPoint, setTotalPoint] = useState(0);

    useEffect(() => {
        renderOptions();
    }, [currentQuestionNum]);

    const getNextQuestion = (point: number) => {
        const nextQuestionNum = currentQuestionNum + 1;
        setCurrentQuestionNum(nextQuestionNum);
        setTotalPoint(totalPoint + point);
    };

    const renderOptions = () => {
        if (currentQuestionNum === 5) {
            router.push(`/yamaguchi/diagnosis/result/${totalPoint}`);
            return;
        }
        return (
            <QuestionWrapper>
                <QuestionText>
                    {YAMAGUCHI_QUESTIONS[currentQuestionNum].title}
                </QuestionText>
                {YAMAGUCHI_QUESTIONS[currentQuestionNum].descriptions.map(
                    (description, i) => {
                        return (
                            <OptionWrapper>
                                <OptionNumWrapper>
                                    <p>{`${i}. `}</p>
                                </OptionNumWrapper>
                                <OptionDescriptionWrapper>
                                    <p
                                        onClick={() =>
                                            getNextQuestion(description.point)
                                        }
                                    >
                                        {description.text}
                                    </p>
                                </OptionDescriptionWrapper>
                            </OptionWrapper>
                        );
                    }
                )}
            </QuestionWrapper>
        );
    };

    return (
        <TotalWrapper>
            {/* <Header /> */}
            <Title>山口県民度チェッカー</Title>
            <ContentsWrapper>
                <ProgressBar progressRate={currentQuestionNum / 5} />
                {renderOptions()}
            </ContentsWrapper>
        </TotalWrapper>
    );
}

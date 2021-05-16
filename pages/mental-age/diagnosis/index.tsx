import React, {useEffect, useState} from "react";
import styled from "styled-components";
// import { ProgressBar } from "../components/ProgressBar";
import { 
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon
} from 'react-share';
import { useRouter } from 'next/router';
import { ProgressBar } from "components/ProgressBar";

const TotalWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: lightblue;
    flex: 1;
    /* max-width: 350px; */
    /* width: 800px; */
`;

const ContentsWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  /* max-height: 1000px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: white; */
`

const QuestionWrapper = styled.div`
    /* background: white; */
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
    background: #0099FF;
`;

const OptionDescriptionWrapper = styled.div`
    cursor: pointer;
    background: white;
    width: 100%;
`;



export default function Quiz(){
    const router = useRouter();
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [selectedQuestionId, setSelectedQuestionId] = useState(0);
    const [isQuizDone, setIsQuizDone] = useState(false);

    const width = 255
    const height = 255

    useEffect(() => {
        if(currentQuestionNum === 5) {
                setIsQuizDone(true);
                return;
            };
        renderOptions();
    }, [currentQuestionNum])

    type SelectedQuestion = {
        id: number;
        title: string;
        descriptions: string[];
    }

    const QUESTIONS: SelectedQuestion[] = [
        {
            id: 0, 
            title: "落ち着いているねとよく言われる",
            descriptions: ["頻繁言われる", "時々言われる", "あまり言われない", "全く言われない"]
        }, 
        {
            id: 1,
            title: "あなたが言語を勉強する目的は？",
            descriptions: ["趣味", "ビジネス", "出会い目的", "友達作り"]
        }, 
        {
            id: 2,
            title: "一番好きな地域は？",
            descriptions: ["ヨーロッパ", "アジア", "アフリカ", "南米"]
        }, 
        {
            id: 3,
            title: "言語学習で大事にしたいことは",
            descriptions: ["利益になるかどうか", "話者の多さ", "趣味として続けられるか", "レアな言語であること"]
        }, 
        {
            id: 4,
            title: "学ぶ言語文化について大事なことは？",
            descriptions: ["オシャレさ", "神秘性", "グルメ", "歴史"]
        }, 
    ]

    const getNextQuestion = () => {
        const nextQuestionNum = currentQuestionNum + 1;
        setCurrentQuestionNum(nextQuestionNum);
    }

    const selectQuestion = () => {
        const randomNum = Math.random()
        const questionId = Math.round(randomNum) + currentQuestionNum;
        setSelectedQuestionId(questionId)
    }

    const renderOptions = () => {
        if(currentQuestionNum === 5) {
            router.push("/mental-age/diagnosis/result/22");
            return;
        };
        return (
        <QuestionWrapper>
            <QuestionText>{QUESTIONS[currentQuestionNum].title}</QuestionText>
            {QUESTIONS[currentQuestionNum].descriptions.map((description, i) => {
                return (
                    <OptionWrapper>
                    <OptionNumWrapper><p>{`${i}. `}</p></OptionNumWrapper>
                    <OptionDescriptionWrapper>
                    <p onClick={getNextQuestion}>{description}</p>
                    </OptionDescriptionWrapper>
                    </OptionWrapper>
                )
            })}
        </QuestionWrapper>)
    }
    
    return (
        <TotalWrapper>
            <ContentsWrapper>
            <ProgressBar progressRate={currentQuestionNum / 5} />
            {renderOptions()}    
            </ContentsWrapper>
        </TotalWrapper>)
}

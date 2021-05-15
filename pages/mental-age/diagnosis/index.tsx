import React, {useEffect, useState} from "react";
import styled from "styled-components";
// import { ProgressBar } from "../components/ProgressBar";
import { 
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon
} from 'react-share';
import { useRouter } from 'next/router'

const TotalWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const QuestionWrapper = styled.div`
    min-width: 350px;
`;

const Description = styled.div`
    cursor: pointer;
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
        console.log(currentQuestionNum)
        console.log("currentQuestionNum changed")
    }, [currentQuestionNum])

    const [png, setPng] = useState<string | null>(null)

    useEffect(() => {
      const canvasElem = document.createElement('canvas')
      canvasElem.width = width
      canvasElem.height = height
      const ctx = canvasElem.getContext('2d')
  
      // draw
      if(ctx === null) return;
  
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "yellow"
      ctx.fillRect(0, 0, width, height)

      ctx.font = "16pt Arial";
      ctx.fillStyle = "blue"
      ctx.fillText("あなたの言語は英語です！", 0, 50)
      ctx.fillText("あなたの言語は英語です！", 0, 122)
  
      setPng(canvasElem.toDataURL())
    }, [])

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
        console.log(selectedQuestionId, QUESTIONS[selectedQuestionId])
        if(currentQuestionNum === 5) {
            router.push("/mental-age/diagnosis/result/22");
            return;
        };
        return (
        <QuestionWrapper>
            <p>{QUESTIONS[currentQuestionNum].title}</p>
            {QUESTIONS[currentQuestionNum].descriptions.map((description) => {
                return (
                    <Description>
                    <p onClick={getNextQuestion}>{description}</p>
                    </Description>
                )
            })}
        </QuestionWrapper>)
    }
    
    return (
        <TotalWrapper>
            {renderOptions()}
            {/* <ProgressBar progressRate={(currentQuestionNum) / 5} /> */}
            {/* {isQuizDone ?
                <div>
                    <p>あなたにあった言語は英語</p>
                    <img alt="icon" src={png} />
                    
                    <TwitterShareButton url={"http://31202cc9195d.ngrok.io"} title={"語学診断App"} via={"kaimaru31"}>
                    <TwitterIcon size={31} round />
                    </TwitterShareButton>
                </div>
                 : (
                <div>
                        {renderOptions()}
                </div>
                 )} */}
    
        </TotalWrapper>)
}

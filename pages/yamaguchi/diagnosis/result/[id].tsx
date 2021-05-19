import { useState, useEffect } from "react";
import styled from "styled-components";
import { getYamaguchiData } from "lib/yamaguchi";
import Head from "components/Head";
import { 
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon
} from 'react-share';
import Header from "components/Header";
import Footer from "components/Footer";
import {textM} from "consts/layout";

const BABY_IMAGE = require("public/assets/baby_boy04_laugh.png");
const OLD_MAN_IMAGE = require("public/assets/ojiisan01_laugh.png");

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ContentsWrapper = styled.div<{isPhone?: boolean}>`
  width: ${({isPhone}) => !isPhone && "500px"};
  min-height: ${({isPhone })=> !isPhone && "800px"};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: white;
  height: 100vh;
`;

const ResultWrapper = styled.div`
    max-width: 75%;
`;

const ShareButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Title = styled.div`
    ${textM};
    margin: 8px 0;
`;

const ShareBlock = styled.div`
    position: absolute;
    bottom: 100px;
`;

const Percentage = styled.div`
    font-size: 80px;
`;


export default function Result({yamaguchiData, isPhone}) {
    console.log(yamaguchiData)
    return (
    <Wrapper>
        <Head 
        description={`あなたの結果: ${yamaguchiData.description}`}
        // 参考URL: https://nextjs.org/docs/basic-features/static-file-serving
        image={"https://next-quiz-maker.vercel.app/assets/yama-challenge.png"}
        title={yamaguchiData.title}
        />
        <ContentsWrapper isPhone={isPhone}>
        <Header />
        <Title>あなたの山口県民度</Title>
        <ResultWrapper>
        <p>{`診断の結果、あなたの山口県民度は`}</p>
        <Percentage>{`${yamaguchiData.id * 20}%`}</Percentage>
        <p>でした！ </p>
        <div>{yamaguchiData.description}</div>
        </ResultWrapper>
        <ShareBlock>
        <p>この結果をシェアする</p>
        <ShareButtonsWrapper>
        <TwitterShareButton title={`私の山口県民度は${yamaguchiData.id * 20}%でした！#山口県 #山口クイズ #診断メーカー`} url={`https://next-quiz-maker.vercel.app/mental-age/diagnosis/result/${yamaguchiData.id}`} via={"kaimaru31"}>
            <TwitterIcon size={31} round />
        </TwitterShareButton>
        </ShareButtonsWrapper>
        </ShareBlock>
        <Footer />
        </ContentsWrapper>
    </Wrapper>
        )
}

export async function getServerSideProps({params}) {
    const yamaguchiData = await getYamaguchiData(params.id)
    return {
        props: {
          yamaguchiData
      }
    }
}
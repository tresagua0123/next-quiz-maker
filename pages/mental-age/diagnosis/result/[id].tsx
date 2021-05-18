import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMentalAgeData } from "lib/mental-age"
import Head from "components/Head";
import { 
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon
} from 'react-share';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Header from "components/Header";
import Footer from "components/Footer";
import {textM} from "consts/layout";
import { useMediaQuery } from 'react-responsive';

const BABY_IMAGE = require("public/assets/baby_boy04_laugh.png");
const OLD_MAN_IMAGE = require("public/assets/ojiisan01_laugh.png");

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* background: lightgray; */
`;

const ContentsWrapper = styled.div<{isPhone?: boolean}>`
  /* max-width: 800px; */
  width: ${({isPhone}) => isPhone && "500px"};
  /* width: 100%; */
  height: 100vh;
  /* max-height: 1000px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: white;
`;

const ResultWrapper = styled.div`
    width: 75%;
`;

const ShareButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Title = styled.div`
    ${textM};
    margin: 8px 0;
`;


export default function Result({mentalAgeData}) {
    const router = useRouter();
    const isPhone = useMediaQuery({query: "(max-width: 600px)"});
    const handleClick = (e) => {
        e.preventDefault();
        router.replace("mental-age")
      }
    return (
    <Wrapper>
        <Head 
        description={mentalAgeData.description}
        // 参考URL: https://nextjs.org/docs/basic-features/static-file-serving
        image={"https://next-quiz-maker.vercel.app/assets/baby_boy04_laugh.png"}
        title={mentalAgeData.title}
        />
        <ContentsWrapper isPhone={isPhone}>
        <Header />
        <Title>あなたの精神年齢</Title>
        <ResultWrapper>
        <p>{mentalAgeData.description}</p>
        </ResultWrapper>
        <img src={mentalAgeData.id > 60 ? OLD_MAN_IMAGE : BABY_IMAGE}/>
        {/* <Link href={"/mental-age"}>もどる</Link> */}
        <p>この結果をシェアする</p>
        <ShareButtonsWrapper>
        <TwitterShareButton title={`私の精神年齢は${mentalAgeData.id}歳でした！あなたの精神年齢は？ #精神年齢 #精神年齢診断`} url={`https://next-quiz-maker.vercel.app/mental-age/diagnosis/result/${mentalAgeData.id}`} via={"kaimaru31"}>
            <TwitterIcon size={31} round />
        </TwitterShareButton>
        </ShareButtonsWrapper>
        <Footer />
        </ContentsWrapper>
    </Wrapper>
        )
}

export async function getServerSideProps({params}) {
    const mentalAgeData = await getMentalAgeData(params.id)
    return {
        props: {
          mentalAgeData
      }
    }
}
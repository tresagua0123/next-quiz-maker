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
import Link from 'next/link'

const BABY_IMAGE = require("public/assets/baby_boy04_laugh.png");
const OLD_MAN_IMAGE = require("public/assets/ojiisan01_laugh.png");

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: lightgray;
    flex: 1;
`;

const ShareButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


export default function Result({mentalAgeData}) {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.replace("mental-age")
      }
      console.log(BABY_IMAGE);
    return (
    <Wrapper>
        <Head 
        description={mentalAgeData.description}
        // 参考URL: https://nextjs.org/docs/basic-features/static-file-serving
        image={"https://next-quiz-maker.vercel.app/assets/baby_boy04_laugh.png"}
        title={mentalAgeData.title}
        />
        <p>Result</p>
        <p>{mentalAgeData.description}</p>
        <img src={mentalAgeData.id > 60 ? OLD_MAN_IMAGE : BABY_IMAGE}/>
        <Link href={"/mental-age"}>もどる</Link>
        <p>この結果をシェアする</p>
        <ShareButtonsWrapper>
        <TwitterShareButton title={"精神年齢アドバイザー #精神年齢 #精神年齢診断"} url={`https://next-quiz-maker.vercel.app/mental-age/diagnosis/result/${mentalAgeData.id}`} via={"kaimaru31"}>
            <TwitterIcon size={31} round />
        </TwitterShareButton>
        </ShareButtonsWrapper>
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
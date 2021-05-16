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
        // やっぱリモートからとってこんと表示おかしくなるかも、、？明日、要検討。
        // image={mentalAgeData.id > 60 ? OLD_MAN_IMAGE : BABY_IMAGE}
        image={"https://next-quiz-maker.vercel.app/assets/baby_boy04_laugh.png"}
        title={mentalAgeData.title}
        />
        <p>Result</p>
        <p>{mentalAgeData.description}</p>
        <img src={mentalAgeData.id > 60 ? OLD_MAN_IMAGE : BABY_IMAGE}/>
        {/* <img src={"https://next-quiz-maker.vercel.app/public/static/baby_boy04_laugh.png"} /> */}
        <p>この結果をシェアする</p>
        <Link href={"/mental-age"}>もどる</Link>
        <ShareButtonsWrapper>
        <TwitterShareButton title={"精神年齢アドバイザー"} url={`https://next-quiz-maker.vercel.app/mental-age/diagnosis/result/${mentalAgeData.id}`} via={"kaimaru31"}>
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
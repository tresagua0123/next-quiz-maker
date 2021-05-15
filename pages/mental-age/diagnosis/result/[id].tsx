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

const BABY_IMAGE = require("public/static/baby_boy04_laugh.png");
const OLD_MAN_IMAGE = require("public/static/ojiisan01_laugh.png");

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
    return (
    <Wrapper>
        <Head 
        description={mentalAgeData.description}
        image={'https://cly7796.net/blog/sample/rewrite-ogp-with-javascript/01/img' + 2 + '.jpg'}
        title={mentalAgeData.title}
        />
        <p>Result</p>
        <p>{mentalAgeData.description}</p>
        <img src={mentalAgeData.id > 60 ? OLD_MAN_IMAGE : BABY_IMAGE}/>
        <p>この結果をシェアする</p>
        <Link href={"/mental-age"}>もどる</Link>
        <ShareButtonsWrapper>
        <TwitterShareButton title={"精神年齢"} url={"http://708d4b7795cb.ngrok.io/mental-age/diagnosis/result/2"} via={"kaimaru31"}>
            <TwitterIcon size={31} round />
        </TwitterShareButton>
        {/* <FacebookShareButton title={"精神年齢"} url={"http://708d4b7795cb.ngrok.io/mental-age/diagnosis/result/2"} >
            <FacebookIcon size={31} round />
        </FacebookShareButton> */}
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
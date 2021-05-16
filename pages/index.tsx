import React from 'react';
import styled from "styled-components";
import { useRouter } from 'next/router';
import Header from "components/Header";
import Footer from "components/Footer";

const BRAIN_IMG = require("public/assets/mental-age.png")
console.log(BRAIN_IMG);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* flex: 1; */
`;

const ContentesWrapper = styled.div`
  /* width: 800px;
  height: 800px; */
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  position: relative;
`;

const ImageHolder = styled.div`
  justify-content: start;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  /* width: 600px; */
`;

const AdvisorsWrapper = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: row; */
`;

const AdvisorHolder = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ADVISOR_IMAGE = require("public/assets/advisor.png");

export default function Home(){
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
    e.preventDefault();
    router.push(url)
  }
  return (
    <Wrapper>
      <ContentesWrapper>
      <Header />

      {/* <div>あなたの精神年齢などを診断し、生活に役立てるアプリです✨</div> */}
      {/* <ImageHolder > */}
      <p>New! 精神年齢・診断アドバイザー</p>
      <AdvisorsWrapper>
      <AdvisorHolder>
      <img src={BRAIN_IMG} onClick={(e) => handleClick(e, "mental-age")} width={300}/>
      </AdvisorHolder>
      </AdvisorsWrapper>
      {/* </ImageHolder> */}
      <Footer />
      </ContentesWrapper>
    </Wrapper>
  )
}

import React from 'react';
import styled from "styled-components";
import { useRouter } from 'next/router'

const BRAIN_IMG = require("public/assets/brain.png")

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentesWrapper = styled.div`
  width: 800px;
  height: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
`;

const ImageHolder = styled.div`
  justify-content: start;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
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
    opacity: 0.8;
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
      <ImageHolder>
      <img src={ADVISOR_IMAGE} height={60} />
      </ImageHolder>

      {/* <div>あなたの精神年齢などを診断し、生活に役立てるアプリです✨</div> */}
      <div>アドバイザー一覧</div>
      {/* <ImageHolder > */}
      <p>精神年齢アドバイザー</p>
      <AdvisorsWrapper>
      <AdvisorHolder>
      <img src={BRAIN_IMG} onClick={(e) => handleClick(e, "mental-age")} width={300}/>
      </AdvisorHolder>
      </AdvisorsWrapper>
      {/* </ImageHolder> */}
      </ContentesWrapper>
    </Wrapper>
  )
}

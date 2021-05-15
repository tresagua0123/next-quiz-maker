import React from 'react';
import styled from "styled-components";
import { useRouter } from 'next/router'

const BRAIN_IMG = require("public/static/brain.jpg")

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* background: yellow; */
  flex-direction: column;
`;

const ImageHolder = styled.div`
  /* width: 320px; */
`;

export default function Home(){
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
    e.preventDefault();
    router.push(url)
  }
  return (
    <Wrapper>
      <div>Welcome to Your Advisor!</div>
      <div>あなたの精神年齢などを診断し、生活に役立てるアプリです✨</div>
      <p>精神年齢アドバイザー</p>
      <ImageHolder onClick={(e) => handleClick(e, "mental-age")}>
      <img src={BRAIN_IMG} width={300}/>
      </ImageHolder>
    </Wrapper>
  )
}

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useRouter } from 'next/router';
import Header from "components/Header";
import Footer from "components/Footer";
import {textM} from "consts/layout";
import { useMediaQuery } from 'react-responsive';

const BRAIN_IMG = require("public/assets/mental-age.png")

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentesWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  position: relative;
  max-width: 800px;
`;

const AdvisorHolder = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Image = styled.img<{isPhone?: boolean}>`
    width: ${({isPhone}) => isPhone ? "100%" : "500px"};
    margin-bottom: 20px;
`;

const ADVISOR_IMAGE = require("public/assets/advisor.png");

const Title = styled.div`
    ${textM};
    margin: 8px 0;
`;

export default function Home(){
  // const [isPhone, setIsPhone] = useState(false);
  const router = useRouter();
  const isPhone = useMediaQuery({query: "(max-width: 600px)"});
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
    e.preventDefault();
    router.push(url)
  }

  // useEffect(() => {
  //   setIsPhone(useMediaQuery({query: "(max-width: 600px)"}));
  // }, [isPhone])

  return (
    <Wrapper>
      <ContentesWrapper>
      <Header />
      {/* <div>あなたの精神年齢などを診断し、生活に役立てるアプリです✨</div> */}
      <Title>New! 精神年齢チェッカー</Title>
      <AdvisorHolder>
      <Image src={BRAIN_IMG} onClick={(e) => handleClick(e, "mental-age")} isPhone={isPhone}  />
      </AdvisorHolder>
      <Footer />
      </ContentesWrapper>
    </Wrapper>
  )
}

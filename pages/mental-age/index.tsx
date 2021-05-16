import styled from "styled-components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useRouter } from 'next/router';
import {textM} from "consts/layout";

const BRAIN_IMG = require("public/assets/brain-start.png");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex: 1; */
  /* flex:1; */
  /* flex:1; */
  /* max-width: 800px; */
  /* width: 800px; */
`;

const ContentsWrapper = styled.div`
    background: white;
    /* height: 100%; */
    position: relative;
    width: 300px;
    height: 600px;
    /* max-width: 800px; */
    /* height: 1000px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: white; */
`;

const ImageHolder = styled.div`
    /* width: 800px; */
    /* width: 300px; */
    cursor: pointer;
`;

const Title = styled.div`
    ${textM};
    margin-bottom: 4px;
`;


export default function mentalAge(){
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("mental-age/diagnosis")
      }
    return (
    <Wrapper>
    <ContentsWrapper>
    <Header />
    <Title>精神年齢アドバイザー</Title>
    <div>あなたの精神年齢は何歳？<br />あなたの精神年齢を無料で診断。精神年齢を高めるアドバイスをGETしよう！</div>
    <ImageHolder onClick={handleClick}>
    <img  src={BRAIN_IMG} width={300}/>
    </ImageHolder>
    {/* <p onClick={handleClick}>精神年齢をチェックする</p> */}
    <Footer />
    </ContentsWrapper>
    </Wrapper>
    )
}
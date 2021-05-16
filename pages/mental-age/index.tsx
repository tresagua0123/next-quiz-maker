import styled from "styled-components";
import { useRouter } from 'next/router';

const BRAIN_IMG = require("public/assets/brain-start.png");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 800px; */
`;

const ContentsWrapper = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
`;

const ImageHolder = styled.div`
    /* width: 800px; */
    cursor: pointer;
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
    <div>精神年齢アドバイザー</div>
    <div>あなたの精神年齢は何歳？無料で診断して、精神年齢を高めよう！</div>
    <ImageHolder onClick={handleClick}>
    <img  src={BRAIN_IMG}/>
    </ImageHolder>
    {/* <p onClick={handleClick}>精神年齢をチェックする</p> */}
    </ContentsWrapper>
    </Wrapper>
    )
}
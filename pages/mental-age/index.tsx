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
  min-height: 100%;
`;

const ContentsWrapper = styled.div`
    background: white;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    max-width: 800px;
`;

const ImageHolder = styled.div`
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const Image = styled.img<{isPhone?: boolean}>`
    width: ${({isPhone}) => isPhone ? "100%" :  "500px"};
    margin-bottom: 20px;
`;

const Title = styled.div`
    ${textM};
    margin: 8px 0;
`;


export default function mentalAge(pageProps){
    const router = useRouter();
    // const isPhone = useMediaQuery({query: "(max-width: 600px)"});
    const handleClick = (e) => {
        e.preventDefault();
        router.push("mental-age/diagnosis")
      }
    return (
    <Wrapper>
    <ContentsWrapper>
    <Header />
    <Title>精神年齢チェッカー</Title>
    {/* <p>あなたの精神年齢は何歳？<br /> 10秒で診断。SNSでシェアしよう！</p> */}
    <ImageHolder onClick={handleClick}>
    <Image  src={BRAIN_IMG} isPhone={pageProps.isPhone} />
    </ImageHolder>
    {/* <p onClick={handleClick}>精神年齢をチェックする</p> */}
    <Footer />
    </ContentsWrapper>
    </Wrapper>
    )
}
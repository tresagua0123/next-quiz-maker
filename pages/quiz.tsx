import styled from "styled-components";
import { useState } from "react";
import Head from "../components/Head";
import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: yellow;
`;

type Props = {
  prop1: boolean;
  prop2: number;
}

export default function Home({prop1, prop2}: Props){
  console.log(prop1, prop2)
  const [text, setText] = useState("クイズのページだよ");
  return (
    <Wrapper>
      <Head 
       title={'タイトル'}
       description={text}
       keyword={'キーワード'}
       image={'https://t-cr.jp/img.jpg'}
       url={'https://t-cr.jp'}
      />
      <p onClick={() => setText("this is the quiz page")}>Quiz</p>
      <p>sss</p>
      <TwitterShareButton url={"localhost:3000"} title={"kaito"} via={""} >
        <p>shareする</p>
      </TwitterShareButton>
    </Wrapper>
  )
}

import styled from "styled-components";
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function mentalAge(){
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("mental-age/diagnosis")
      }
    return (
    <Wrapper>
    <div>精神年齢アドバイザー</div>
    <div>あなたの精神年齢は何歳？無料で診断して、精神年齢を高めよう！</div>
    <p onClick={handleClick}>精神年齢をチェックする</p>
    </Wrapper>
    )
}
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    background: lightgray;
    // 注意！外部のコンポーネントで基準となるrelativeを設定すること。
    position: absolute;
    bottom: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    color: white;
`;


export default function Header(){
    return(
        <Wrapper>
            <p>©️ 2021 みんなの診断アドバイザー ®️ All right reserved. </p>
        </Wrapper>
    )
}
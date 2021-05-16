import styled from "styled-components";

const ImageHolder = styled.div`
    /* justify-content: start; */
    cursor: pointer;
    &:hover {
    opacity: 0.8;
    }
    /* width: 600px; */
`;

const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    background: lightgray;
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
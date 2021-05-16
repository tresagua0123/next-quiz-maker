import styled from "styled-components";
import Link from 'next/link';

const ImageHolder = styled.div`
    /* justify-content: start; */
    cursor: pointer;
    &:hover {
    opacity: 0.8;
    }
    /* width: 600px; */
`;

const ADVISOR_IMAGE = require("public/assets/advisor.png");

export default function Header(){
    return(
    <Link href={"/"}>
    <ImageHolder>
    <img src={ADVISOR_IMAGE} height={60} />
    </ImageHolder>
    </Link>
    )
}
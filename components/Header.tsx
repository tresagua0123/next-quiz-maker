import styled from "styled-components";
import Link from 'next/link';

const ImageHolder = styled.div`
    cursor: pointer;
    &:hover {
    opacity: 0.8;
    }
`;

const Image = styled.img`
    /* width: 100%; */
`;

const ADVISOR_IMAGE = require("public/assets/advisor.png");

export default function Header(){
    return(
    <div></div>
    // <Link href={"/yamaguchi"}>
    //  <ImageHolder>
    //  <Image src={ADVISOR_IMAGE} height={60} />
    //  </ImageHolder>
    // </Link>
    )
}
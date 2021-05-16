import React, { useRef } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    width: 100%;
`;

const ColorBarWrapper = styled.div`
    border: 1px solid #0099FF;
`;

const ColorBar = styled.div<{progressRate: number; barWidth: number}>`
    width: ${({progressRate, barWidth}) => progressRate * barWidth}px;
    background: #0099FF;
`;

type Props = {
    progressRate: number;
}

export const ProgressBar: React.VFC<Props> = ({progressRate}) => {
    const progressBarRef = useRef(null);
    const getWidth = () => {
        if(!progressBarRef.current) return;
        return progressBarRef.current.clientWidth;
    }
    return (
    <Wrapper ref={progressBarRef}>
    <ColorBarWrapper>
    <ColorBar progressRate={progressRate} barWidth={getWidth()}>ProgressBar</ColorBar>
    </ColorBarWrapper>
    <p>{progressRate * 100} / 100 %</p>
     </Wrapper>)
}
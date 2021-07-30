import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { textM } from 'consts/layout';

const BRAIN_IMG = require('public/assets/yamaguchi-start.png');

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContentesWrapper = styled.div<{ isPhone: boolean }>`
    height: 100vh;
    min-height: ${({ isPhone }) => !isPhone && '800px'};
    display: flex;
    align-items: center;
    flex-direction: column;
    background: white;
    position: relative;
    max-width: 800px;
`;

const AdvisorHolder = styled.div`
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const Image = styled.img<{ isPhone?: boolean }>`
    width: ${({ isPhone }) => (isPhone ? '100%' : '500px')};
    margin-bottom: 20px;
`;

const Title = styled.div`
    ${textM};
    margin: 8px 0 14px 0;
`;

export default function Home(pageProps) {
    const router = useRouter();
    const handleClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        url: string
    ) => {
        e.preventDefault();
        router.push(url);
    };

    return (
        <Wrapper>
            <ContentesWrapper isPhone={pageProps.isPhone}>
                <Header />
                <Title>山口県民チェッカー</Title>
                <AdvisorHolder>
                    <Image
                        src={BRAIN_IMG}
                        onClick={(e) => handleClick(e, 'yamaguchi')}
                        isPhone={pageProps.isPhone}
                    />
                </AdvisorHolder>
                <Footer />
            </ContentesWrapper>
        </Wrapper>
    );
}

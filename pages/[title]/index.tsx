import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useRouter } from 'next/router';
import { textM } from 'consts/layout';

const YAMAGUCHI_IMG = require('public/assets/yamaguchi-start.png');

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
`;

const ContentsWrapper = styled.div<{ isPhone: boolean }>`
    background: white;
    position: relative;
    height: 100vh;
    min-height: ${({ isPhone }) => !isPhone && '800px'};
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

const Image = styled.img<{ isPhone?: boolean }>`
    width: ${({ isPhone }) => (isPhone ? '100%' : '500px')};
    margin-bottom: 20px;
`;

const Title = styled.div`
    ${textM};
    margin: 8px 0 14px 0;
`;

export default function yamaguchi(pageProps) {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push('yamaguchi/diagnosis');
    };
    return (
        <Wrapper>
            <ContentsWrapper isPhone={pageProps.isPhone}>
                <Header />
                <Title>山口県民チェッカー</Title>
                <ImageHolder onClick={handleClick}>
                    <Image src={YAMAGUCHI_IMG} isPhone={pageProps.isPhone} />
                </ImageHolder>
                <Footer />
            </ContentsWrapper>
        </Wrapper>
    );
}

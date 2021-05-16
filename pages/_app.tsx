import {AppProps} from 'next/app';
import styled from "styled-components";

const Wrapper = styled.div`
  background: lightgray;
  max-height: 1000px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
  <Component {...pageProps} />
  </Wrapper>
  )
}

export default MyApp

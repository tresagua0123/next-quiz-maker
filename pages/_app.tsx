import { useRef, useEffect, useState } from "react";
import {AppProps} from 'next/app';
import styled from "styled-components";

const BREAK_POINT = 600;

const Wrapper = styled.div<{isPhone: boolean}>`
  background: lightblue;
  max-height: ${({isPhone}) => isPhone ? `100vh` : "100vh"};
`;

function MyApp({ Component, pageProps, router }: AppProps) {
  const [ isPhone, setIsPhone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!ref.current || !ref.current.clientWidth) return;
    setIsPhone(ref.current.clientWidth < BREAK_POINT)
  }, [router.pathname]);

  pageProps = {
    ...pageProps,
    isPhone: isPhone
  };

  return (
    <Wrapper ref={ref} isPhone={isPhone}>
  <Component {...pageProps} />
  </Wrapper>
  )
}

export default MyApp

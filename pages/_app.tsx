import { useRef, useEffect, useState } from "react";
import {AppProps} from 'next/app';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div<{isPhone: boolean; width: number;}>`
  /* padding-top: 80px; */
  background: lightblue;
  /* max-width: 800px; */
  max-height: ${({isPhone, width}) => isPhone ? `100vh` : "800px"};
`;

function MyApp({ Component, pageProps }: AppProps) {
  const isPhone = useMediaQuery({query: "(max-width: 600px)"});
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if(!ref.current || !ref.current.clientWidth) return;
    setWidth(ref.current.clientWidth)
  }, [ref.current])

  return (
    <Wrapper ref={ref} isPhone={isPhone} width={width}>
  <Component {...pageProps} />
  </Wrapper>
  )
}

export default MyApp

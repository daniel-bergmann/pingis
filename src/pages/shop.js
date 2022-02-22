import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import herologo from 'public/images/hero-logo.svg';

export default function about() {
  return (
    <>
      <Head>
        <title>pingis.is - shop</title>
        <meta name='description' content='Table Tennis images from Iceland.' />
      </Head>
      <Container>
        <Half>
          <h1>Buy Prints</h1>

          <p>
            If you want to buy prints in full image size without the watermark
            please contact admin at danielbergmann@hi.is.
          </p>
        </Half>
        <Half>
          <div className='herologo'>
            <Image src={herologo} alt='tti Hero' />
          </div>
        </Half>
      </Container>
    </>
  );
}
const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  p,
  h1 {
    margin: 10px;
  }
  @media (min-width: 768px) {
    height: 60vh;
    flex-direction: row;
  }
`;

const Half = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 80%;
  }
`;

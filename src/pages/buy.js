import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import herologo from 'public/images/hero-logo.svg';

export default function about() {
  return (
    <>
      <Head>
        <title>My Images</title>
        <meta name='description' content='All of my cool images.' />
      </Head>
      <Container>
        <Half>
          <h1>pingis - Buy Prints</h1>

          <p>
            If you want to buy prints in full image size and without the
            watermark and financially support the project please contact site
            creator at danielbergmann@hi.is. All profit goes into keeping the
            valuable historic online.
          </p>
        </Half>
        <Half>
          <Image src={herologo} alt='tti Hero' />
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
    height: 80vh;
    flex-direction: row;
  }
`;

const Half = styled.header`
  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      width: 80%;
    }
  }
`;

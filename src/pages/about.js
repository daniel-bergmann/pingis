import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import herologo from 'public/images/hero-logo.svg';

export default function about() {
  return (
    <>
      <Head>
        <title>Table Tennis Illustration</title>
        <meta
          name='description'
          content='Table Tennis illustrations from Iceland.'
        />
      </Head>
      <Container>
        <Half>
          <h1>Table Tennis Illustrations - History archive</h1>
          <p>
            This project was created to archive Icelandic table tennis history
            through digital media and share with everybody. Here you should find
            photos, old and new from Icelandic table tennis tournaments, trips
            and club activities. You can also buy individual prints in full size
            without the tti.is watermark.
          </p>
          <p>
            Anyone can participate and contribute to the project. If you want to
            contribute or add content, please contact site creator at
            danielbergmann@hi.is.
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

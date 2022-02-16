import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import herologo from 'public/images/hero-logo.svg';
import hero from 'public/images/tti-hero.png';

export default function Header() {
  return (
    <Container>
      <Half>
        <Image src={hero} alt='tti Hero' />
      </Half>
      <Half>
        <Image src={herologo} alt='tti Hero' />
      </Half>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100% auto;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Half = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

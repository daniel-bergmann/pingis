import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import hero from 'public/images/tti-hero.png';

export default function Header() {
  return (
    <Container>
      <Half>
        <Image src={hero} alt='tti Hero' />
      </Half>
    </Container>
  );
}

const Container = styled.header`
  h1 {
    padding: 20px;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 100% auto;
  @media (min-width: 768px) {
    height: 100vh;
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

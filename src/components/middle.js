import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import blackBat from '../../public/images/blackbat.svg';
import whiteBat from '../../public/images/whitebat.svg';
import blackball from '../../public/images/blackball.svg';
import whiteball from '../../public/images/whiteball.svg';

export default function middle() {
  return (
    <Container>
      <Upper>
        <Image src={whiteball} alt='tti Hero' />
        <Image src={whiteBat} alt='tti Hero' />
      </Upper>
      <Lower>
        <Image src={blackBat} alt='tti Hero' />
        <Image src={blackball} alt='tti Hero' />
      </Lower>
     
    </Container>
  );
}
const Container = styled.header`
  height: 100vh;
  @media (min-width: 768px) {
  }
`;

const Upper = styled.header`
  display: flex;

  align-items: center;
  height: 50%;
  background: #333;
  justify-content: space-around;
  @media (min-width: 768px) {
  }
`;
const Lower = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50%;

  @media (min-width: 768px) {
  }
`;

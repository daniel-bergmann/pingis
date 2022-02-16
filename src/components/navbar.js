import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from 'public/images/logo.svg';

export default function navbar() {
  return (
    <Container>
      <ul>
        <li>link</li>
      </ul>
      <Image src={logo} alt='tti logo' />
      <ul>
        <li>link</li>
      </ul>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50% auto;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

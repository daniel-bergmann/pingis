import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function middle() {
  return (
    <Container>
      <Content>
        <p>Created by Daniel Bergmann</p>
      </Content>
    </Container>
  );
}
const Container = styled.header`
  height: 10vh;
  @media (min-width: 768px) {
  }
`;

const Content = styled.header`
  height: 100%;
  background: #333;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
  }
`;

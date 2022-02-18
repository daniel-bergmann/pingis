import React from 'react';
import styled from 'styled-components';

export default function middle() {
  let date = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <p>
          {' '}
          <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
          {' ' + date + ' ' + 'Table Tennis Illustrations, Daniel Bergmann.'}
        </p>
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

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import herologo from 'public/images/hero-logo.svg';

export default function about() {
  return (
    <Container>
      <Half>
        <h1>Table Tennis Iceland - History archive</h1>
        <p>
          This project was created to archive Icelandic table tennis history and
          share with anyone who wants to learn more about it. Here you should
          find photos, old and new from Icelandic TT tournaments, trips and club
          activities. Maybe later there will be written history and videos.
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

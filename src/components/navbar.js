import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from 'public/images/logo.svg';
import Link from 'next/link';

export default function navbar() {
  return (
    <Container>
      <ul>
        <Link href='/' passHref>
          <li>history(coming soon)</li>
        </Link>
      </ul>
      <Link href='/' passHref>
        <Image className='logo' src={logo} alt='tti logo' />
      </Link>
      <ul>
        <Link href='/about' passHref>
          <li>about</li>
        </Link>
      </ul>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50% auto;
  .logo {
    cursor: pointer;
  }
  ul {
    display: flex;

    justify-content: space-between;
  }
  li {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

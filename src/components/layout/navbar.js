import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "public/images/logo.svg";
import Link from "next/link";

export default function navbar() {
  return (
    <Container>
      <ul>
        <Link href="/shop" passHref>
          <li>shop</li>
        </Link>
      </ul>
      <Link href="/" passHref>
        <Image className="logo" src={logo} alt="tti logo" />
      </Link>
      <ul>
        <Link href="/news" passHref>
          <li>news</li>
        </Link>
      </ul>
    </Container>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50% auto;
  margin: 30px 0;
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

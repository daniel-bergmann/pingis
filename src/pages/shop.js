import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import herologo from "public/images/hero-logo.svg";


// ----------------
// this page will be updated into a ecommerce page later
// +++++++++++++

export default function about() {
  return (
    <>
      <Head>
        <title>pingis.is</title>
        <meta name="description" content="Table Tennis images from Iceland." />
      </Head>
      <Container>
        <Half>
          <h1>Buy Prints</h1>

          <p>
            If you want to support the project by buying prints in full image
            size without the watermark please contact webmaster at
            danielbergmann@hi.is.
          </p>
        </Half>
        <Half>
          <div className="herologo">
            <Image src={herologo} alt="tti Hero" />
          </div>
        </Half>
      </Container>
    </>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

// wrapper
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
    height: 60vh;
    flex-direction: row;
  }
`;

// the page is split in 2 parts
const Half = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 80%;
  }
`;

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import uuid from 'react-uuid';
import Middle from '../components/middle';
import Hero from '../components/hero';

import { search, mapImageResources } from '../lib/cloudinary';

// renaming props because of useState conflict and to keep code nice and clean
export default function Home({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  async function handleLoadMore(e) {
    e.preventDefault();
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json());
    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);
  }

  return (
    <>
      <Head>
        <title>pingis.is - home</title>
        <meta name='description' content='Table Tennis images from Iceland.' />
      </Head>
      {/* The hero image */}
      <Hero />
      {/* Table tennis paddles */}
      <Middle />

      <ul>
        {images.map((image) => {
          return (
            <li key={uuid()}>
              <a href={image.link} rel='noreferrer'>
                <Container>
                  <Link href='/buy' passHref>
                    <div className='img'>
                      <Image
                        width={image.width}
                        height={image.height}
                        src={image.image}
                        alt=''
                      />
                      <div className='text'>
                        <h3>{image.title.slice(0, 9)}</h3>
                        <p className='buy'>Buy print</p>
                      </div>
                    </div>
                  </Link>
                </Container>
              </a>
            </li>
          );
        })}
      </ul>
      <LoadMore>
        <button onClick={handleLoadMore}>Load More</button>
      </LoadMore>
      <Middle />
    </>
  );
}

export async function getStaticProps() {
  const results = await search();
  // destructuring resources
  const { resources, next_cursor: nextCursor } = results;

  const images = await mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor,
      // : nextCursor || false,
    },
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 60px 0;
  h3 {
    text-align: center;
  }
  .img {
    .text {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
  }
  @media (min-width: 768px) {
    .img {
      max-width: 800px;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const LoadMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  button {
    height: 80px;
    width: 160px;
  }
  @media (min-width: 768px) {
    button {
      height: 80px;
      width: 160px;
    }
  }
`;

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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

  // ++++++
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

  // ++++++

  return (
    <>
      <Head>
        <title>My Images</title>
        <meta name='description' content='All of my cool images.' />
      </Head>

      <>
        <Hero />
        <Middle />

        <ul>
          {images.map((image) => {
            return (
              <li key={uuid()}>
                <a href={image.link} rel='noreferrer'>
                  <div>
                    <Image
                      width={image.width}
                      height={image.height}
                      src={image.image}
                      alt=''
                    />
                  </div>
                  <h3>{image.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
        <p>
          <button onClick={handleLoadMore}>Load More</button>
        </p>
      </>
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

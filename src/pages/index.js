import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Hero from '@components/hero';

// components
import { search, mapImageResources, getFolders } from '../lib/cloudinary';

export default function Home({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [activeFolder, setActiveFolder] = useState('');
  const [activate, setActivate] = useState(false);

  async function handleLoadMore(e) {
    e.preventDefault();
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
        expression: `folder="${activeFolder}"`,
      }),
    }).then((r) => r.json());
    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);
  }

  function handleOnFolderClick(e) {
    setActivate(true);
    const folderPath = e.target.dataset.folderPath;
    setActiveFolder(folderPath);
    setNextCursor(undefined);
    setImages([]);
  }

  useEffect(() => {
    (async function run() {
      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          nextCursor,
          expression: `folder="${activeFolder}"`,
        }),
      }).then((r) => r.json());
      const { resources, next_cursor: updatedNextCursor } = results;

      const images = mapImageResources(resources);

      setImages((prev) => {
        return [...prev, ...images];
      });

      setNextCursor(updatedNextCursor);
    })();
  }, [activeFolder]);

  return (
    <>
      <Head>
        <title>Table Tennis Iceland</title>
        <meta name='description' content='Icelandic table tennis' />
      </Head>

      <>
        <Hero />

        <Container>
          <ul onClick={handleOnFolderClick}>
            {folders.map((folder) => {
              return (
                <li key={folder.path}>
                  <button data-folder-path={folder.path}>
                    <p>View Images</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </Container>

        <ImgContainer>
          <ul>
            {images.map((image) => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel='noreferrer'>
                    <div>
                      <Image
                        width={image.width}
                        height={image.height}
                        src={image.image}
                        alt=''
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          {!activate ? (
            <p>Your serve.</p>
          ) : (
            <button onClick={handleLoadMore}>
              <p>Load More Images</p>
            </button>
          )}
        </ImgContainer>
      </>
    </>
  );
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  });
  // next cursor is used so the images wont be sent all at once from the server but instead first some and then you can click "next page" for more
  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  const { folders } = await getFolders();

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  };
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const ImgContainer = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

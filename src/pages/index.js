import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
        <title>My Images</title>
        <meta name='description' content='All of my cool images.' />
      </Head>

      <>
        <h1 className='sr-only'>My Images</h1>

        <h2>Folders</h2>

        <ul onClick={handleOnFolderClick}>
          {folders.map((folder) => {
            return (
              <li key={folder.path}>
                <button data-folder-path={folder.path}>{folder.name}</button>
              </li>
            );
          })}
        </ul>
        <p>
          <button onClick={handleLoadMore}>Load More Results</button>
        </p>
        <h2>Images</h2>

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
                  <h3>{image.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
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

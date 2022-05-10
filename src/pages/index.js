import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import uuid from "react-uuid";
import { search, mapImageResources } from "../lib/cloudinary";

// +++++++++++++++++++++++++++++++++++++++++
// components
import BatAndBall from "../components/batAndBall";
import Hero from "../components/hero";

// renaming props because of useState conflict and to keep code nice and clean
export default function Home({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  // ++++++++++++++++++++++++++++++++++++++++++++++++
  // function to send more requests to the server
  async function handleLoadMore(e) {
    // preventing the default behaviour of the DOM
    e.preventDefault();

    // Sending a HTTP POST request to the backend wich in turn calls the lib file containing Cloudinary details
    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json());

    // pulling in the resources from the API and the NextCursor for load more functionality
    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    // When the request is triggered we still want to keep the images that have already been sent
    setImages((prev) => {
      return [...prev, ...images];
    });

    // Changing the state
    setNextCursor(updatedNextCursor);
  }

  return (
    <>
      <Head>
        <title>pingis.is</title>
        <meta name="description" content="Table Tennis images from Iceland." />
      </Head>
      {/* The hero image */}
      <Hero />

      <ul>
        {images.map((image) => {
          return (
            // used the uuid library for unique id
            <li key={uuid()}>
              <a href={image.link} rel="noreferrer">
                <Container>
                  <div className="img">
                    <Image
                      width={image.width}
                      height={image.height}
                      src={image.image}
                      alt="image from pingis.is"
                    />
                    <div className="text">
                      {/* Sliced the title to show the year */}
                      <h3>{image.title.slice(0, 9)}</h3>
                      <Link href="/shop" passHref>
                        <p className="buy">Buy print</p>
                      </Link>
                    </div>
                  </div>
                </Container>
              </a>
            </li>
          );
        })}
      </ul>
      <LoadMore>
        {/* triggering this makes a new requst to the server adding 10 images below */}
        <button onClick={handleLoadMore}>Load More</button>
      </LoadMore>
      <BatAndBall />
    </>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Using the Cloudinary API

export async function getStaticProps() {
  const results = await search();
  // destructuring resources from API
  const { resources, next_cursor: nextCursor } = results;

  const images = await mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor,

      // commented this out in a debugging session
      // : nextCursor || false,
    },
  };
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

// wrapper
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 60px 0 0 0;
  h3 {
    text-align: center;
  }
  .buy {
    &:hover {
      text-decoration: underline;
    }
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
      max-width: 900px;
    }
  }
`;

// the load more button
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

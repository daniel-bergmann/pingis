import { useState } from "react";
import Head from "next/head";
import { search, mapImageResources } from "../lib/cloudinary";

// +++++++++++++++++++++++++++++++++++++++++
// components
import BatAndBall from "../components/batAndBall";
import Hero from "../components/hero";
import Images from "@components/images";
import Button from "@components/button";

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
      {/* photography */}
      <Images images={images} />
      {/* Click button to requset more images */}
      <Button handleLoadMore={handleLoadMore} />
      {/* footer decoration */}
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

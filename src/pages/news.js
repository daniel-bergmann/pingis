import Head from "next/head";
import styled from "styled-components";
// server holds the link to the host
import { server } from "../../config/index";

// Components
import BtiNews from "@components/news/btiNews";

// fetching from the API
export async function getServerSideProps() {
  const res = await fetch(`${server}${process.env.BTI_EP}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function about({ data }) {
  return (
    <>
      <Head>
        <title>pingis.is</title>
        <meta name="description" content="Table Tennis in Iceland." />
      </Head>
      <Container>
        <h1>Latest Table Tennis News from Around the World</h1>
        <BtiNews data={data} />
      </Container>
    </>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

// The wrapper
const Container = styled.div`
  h1 {
    margin: 40px 0;
    text-align: center;
  }
`;

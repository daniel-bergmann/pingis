import Head from "next/head";
import styled from "styled-components";

// Components
import News from "@components/news";


export default function news({ ittfData, btiData }) {
  return (
    <>
      <Head>
        <title>pingis.is</title>
        <meta name="description" content="Table Tennis in Iceland." />
      </Head>
      <Container>
        <h1>Latest Table Tennis News from Around the World</h1>
        <News btiData={btiData} ittfData={ittfData} />
      </Container>
    </>
  );
}

// ----------------
// Fetching Data
// +++++++++++++

export async function getStaticProps() {
  // response
  const btiRes = await fetch(process.env.BTI_API);
  const ittfRes = await fetch(process.env.ITTF_API);
  const btiData = await btiRes.json();
  const ittfData = await ittfRes.json();

  // returning the json
  if (!btiData || !ittfData) {
    return {
      notFound: true,
    };
  }

  return {
    // will be passed to the page component as props
    props: { ittfData, btiData },
  };
}

// ----------------
// Styling
// +++++++++++++

// The wrapper
const Container = styled.div`
  h1 {
    margin: 40px 0;
    text-align: center;
  }
`;

// --------------------------------------
// // fetching from the scraped API
// +++++++++++++++++++++++++++++++++++++++

// export async function getServerSideProps() {
//   const res = await fetch(`${server}${process.env.BTI_EP}`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

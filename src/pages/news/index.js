import Head from "next/head";
import styled from "styled-components";

// Components
import News from "@components/news";

export default function news({ ittfData, btiData, krData, vikingurData }) {
  return (
    <>
      <Head>
        <title>pingis.is</title>
        <meta name="description" content="Table Tennis in Iceland." />
      </Head>
      <Container>
        <h1>Latest Table Tennis News from Around the World</h1>
        <News
          btiData={btiData}
          ittfData={ittfData}
          krData={krData}
          vikingurData={vikingurData}
        />
      </Container>
    </>
  );
}

// ----------------
// Fetching Data
// +++++++++++++

export async function getStaticProps() {
  // fetching the data
  const btiRes = await fetch(process.env.BTI_API);
  const ittfRes = await fetch(process.env.ITTF_API);
  const vikingurRes = await fetch('https://vikingur.is/wp-json/wp/v2/posts?categories=25');
  const krRes = await fetch("https://kr.is/wp-json/wp/v2/posts?categories=3");
  // getting promise
  const btiData = await btiRes.json();
  const ittfData = await ittfRes.json();
  const vikingurData = await vikingurRes.json();
  const krData = await krRes.json();

  // returning the json
  if (!btiData || !ittfData) {
    return {
      notFound: true,
    };
  }

  return {
    // will be passed to the page component as props
    props: { ittfData, btiData, vikingurData, krData },
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

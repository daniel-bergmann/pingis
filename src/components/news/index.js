import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function News({ ittfData, btiData }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Container>
        <h1>Iceland</h1>
        {btiData.map((i) => {
          return (
            <div key={i.id}>
              <Link href={"/news/" + i.slug} alt={i.title.rendered} passHref>
                <h2>{i.title.rendered}</h2>
              </Link>

              <span className="date">{i.date.slice(0, 10)}</span>

              {!showContent ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: i.content.rendered.slice(1, 150),
                    }}
                  />
                  ...
                  <a onClick={() => setShowContent(!showContent)}>
                    read article
                  </a>
                </>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: i.content.rendered,
                  }}
                />
              )}
            </div>
          );
        })}
      </Container>
      <Container>
        <h1>International</h1>
        {ittfData.map((i) => {
          return (
            <div key={i.id}>
              <h2>{i.title.rendered}</h2>
              <span className="date">{i.date.slice(0, 10)}</span>
              {!showContent ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: i.content.rendered.slice(3, 150),
                    }}
                  />
                  ...
                  <a onClick={() => setShowContent(!showContent)}>
                    read article
                  </a>
                </>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: i.content.rendered,
                  }}
                />
              )}
            </div>
          );
        })}
      </Container>
    </>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

// wrapper
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  padding: 20px;

  /* hiding trash elements that comes with articles */
  svg {
    display: none;
  }
  .pvc_stats {
    display: none;
  }
  /* make sure the images are the right size */
  img {
    height: 100%;
    width: 100%;
  }
  /* table {
    display: none;
  } */

  div {
    h2 {
      font-weight: bold;
      color: #005a80;
      padding-top: 50px;
    }
    a {
      text-decoration: underline;
    }

    .date {
      opacity: 0.5;
    }

    p {
      font-size: 16px;
      padding: 8px 0;
    }

    a {
      text-align: left;
      &:hover {
        text-decoration: underline;
      }
      h3 {
        font-weight: 100;
      }
    }
  }
  @media (min-width: 768px) {
    div {
      max-width: 600px;
      margin: 0 auto;
      a {
        text-align: left;
        &:hover {
          text-decoration: underline;
        }
        h3 {
          font-weight: 100;
        }
      }
    }
  }
`;

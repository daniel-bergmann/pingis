import React, { useState } from "react";
import styled from "styled-components";

export default function ittfNews({ ittfData, btiData }) {
  const [view, setView] = useState(false);
  return (
    <>
      <Container>
        <h2>ITTF - International</h2>
        {ittfData.map((i) => {
          return (
            <div>
              <a key={i.id} href={i.link} target="_blank">
                <h3>{i.title.rendered}</h3>
                {/* <div dangerouslySetInnerHTML={{ __html: i.content.rendered }} /> */}
              </a>
              <p>{i.date.slice(0, 10)}</p>
            </div>
          );
        })}
      </Container>
      <Container>
        <h2>BTÍ - Iceland</h2>
        {btiData.map((i) => {
          return (
            <div>
              <a key={i.id} href={i.link} target="_blank">
                <h3>{i.title.rendered}</h3>
                {/* <div dangerouslySetInnerHTML={{ __html: i.content.rendered }} /> */}
              </a>
              <p>{i.date.slice(0, 10)}</p>
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

  h2 {
    margin-bottom: 20px;
  }
  div {
    padding-bottom: 20px;
    p {
      color: #304d91;
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
    h2 {
      margin: 20px 30%;
    }
    div {
      margin: 0 30%;
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

import React from "react";
import styled from "styled-components";

export default function middle() {
  let date = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <p>
          {" "}
          {/* using DSIHTML to insert the copyright symbol */}
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          {" " + date + " " + "pingis.is."}
        </p>
      </Content>
    </Container>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

const Container = styled.header`
  height: 5vh;
  @media (min-width: 768px) {
  }
`;

const Content = styled.header`
  height: 100%;
  background: #333;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
  }
`;

import styled from "styled-components";

// ++++++++++++++++++++++++
// This components displays all rendered content in each individual news article
// ++++++++++++

export default function RenderedSlug({ content }) {
  return (
    <Container>
      <h1>{content.title.rendered}</h1>
      <span className="date">{content.date.slice(0, 10)}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: content.content.rendered,
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
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
    margin: 10px 0;
  }
  h1 {
    color: #005a80;
    padding-top: 50px;
  }

  .date {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 100px auto;
  }
`;

import styled from "styled-components";

export default function News({ ittfData, btiData }) {
  return (
    <>
      <Container>
        <h2>BTÍ - Iceland</h2>
        {btiData.map((i) => {
          return (
            <div key={i.id}>
              <a href={i.link} target="_blank" rel="noreferrer">
                <h3>{i.title.rendered}</h3>
              </a>
              <h4>{i.date.slice(0, 10)}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: i.content.rendered,
                }}
              />
            </div>
          );
        })}
      </Container>
      <Container>
        <h2>ITTF - International</h2>
        {ittfData.map((i) => {
          return (
            <div key={i.id}>
              <a href={i.link} target="_blank" rel="noreferrer">
                <h3>{i.title.rendered}</h3>
              </a>
              <h4>{i.date.slice(0, 10)}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: i.content.rendered.slice(3),
                }}
              />
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
  table {
    display: none;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  h4 {
    padding: 5px 0 5px 0;
  }

  div {
    padding-bottom: 20px;
    p {
      font-size: 16px;
      padding: 5px 0;
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

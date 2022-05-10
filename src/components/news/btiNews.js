import Image from "next/image";
import styled from "styled-components";

export default function bti({ data }) {
  return (
    <Container>
      <h2>Iceland</h2>
      {data.map((i) => {
        return (
          <ApiData key={i.title}>
            <a href={`${i.link}`} target="_blank" rel="noreferrer" passHref>
              <Image
                className="img"
                src={`${i.pic}`}
                width="400"
                height="300"
                alt="tti Hero"
              />
            </a>
            <div className="newsText">
              <a href={`${i.link}`} target="_blank" rel="noreferrer" passHref>
                <h3>{i.title.slice(0, -7)}</h3>
              </a>
              <p>
                {i.about}
                <a href={`${i.link}`} target="_blank" rel="noreferrer" passHref>
                  {" "}
                  <strong className="bold">Read Full Article</strong>
                </a>
              </p>
            </div>
          </ApiData>
        );
      })}
    </Container>
  );
}

// The wrapper
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    text-align: center;
  }
  @media (min-width: 768px) {
  }
`;

const ApiData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .newsText {
    margin: 10px;
    .bold {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    h3,
    h4,
    p {
      margin: 5px 10px;
    }

    h3,
    h4 {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;

    .newsText {
      margin: 50px;
      h3,
      h4,
      p {
        margin: 0px 40px;
      }

      max-width: 450px;
    }
  }
`;

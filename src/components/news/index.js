import styled from "styled-components";
import Link from "next/link";

export default function News({ ittfData, btiData, krData, vikingurData }) {
  return (
    <>
      <Container>
        <h1>Iceland</h1>

        {/* Data coming from BTÍ */}
        {btiData.map((i) => {
          return (
            <div key={i.id}>
              <Link
                href={"/news/bti/" + i.slug}
                alt={i.title.rendered}
                passHref
              >
                <h2>{i.title.rendered}</h2>
              </Link>
              <span className="date">{i.date.slice(0, 10)}</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: i.content.rendered.slice(1, 100) + "...",
                }}
              />
            </div>
          );
        })}

        {/* Data coming from Víkingur */}
        {vikingurData.map((i) => {
          return (
            <div key={i.id}>
              <Link
                href={"/news/vikingur/" + i.slug}
                alt={i.title.rendered}
                passHref
              >
                <h2>{i.title.rendered}</h2>
              </Link>
              <span className="date">{i.date.slice(0, 10)}</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: i.content.rendered.slice(1, 100) + "...",
                }}
              />
            </div>
          );
        })}
        {/* Data coming from KR */}
        {krData.map((i) => {
          return (
            <div key={i.id}>
              <Link
                href={"/news/kr/" + i.slug}
                alt={i.title.rendered}
                passHref
              >
                <h2>{i.title.rendered}</h2>
              </Link>
              <span className="date">{i.date.slice(0, 10)}</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: i.content.rendered.slice(1, 100) + "...",
                }}
              />
            </div>
          );
        })}

        {/* Data coming from ITTF */}

        <h1>International</h1>
        {ittfData.map((i) => {
          return (
            <div key={i.id}>
              <Link
                href={"/news/ittf/" + i.slug}
                alt={i.title.rendered}
                passHref
              >
                <h2>{i.title.rendered}</h2>
              </Link>
              <span className="date">{i.date.slice(0, 10)}</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: i.content.rendered.slice(3, 100) + "...",
                }}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
}

// ++++++++++++++++++++++++++++++
// Styling
// ++++++++++++

// wrapper
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
  h2 {
    color: #333;
    padding-top: 50px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p {
    font-size: 16px;
  }

  .date {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 100px auto;
  }
`;

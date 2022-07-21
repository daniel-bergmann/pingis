import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import ThumbImage from "../../../public/images/pingis-thumb.png";

export default function News({ ittfData, btiData, krData, vikingurData }) {
  return (
    <>
      <h1>Iceland</h1>

      {/* Data coming from BTÍ */}
      <Container>
        {btiData.map((item) => {
          return (
            <Link
              key={item.id}
              href={"/news/bti/" + item.slug}
              alt={item.title.rendered}
              passHref
            >
              <Item>
                <Image
                  width={350}
                  height={300}
                  className="img"
                  src={ThumbImage}
                  placeholder="blur"
                />
                <div>
                  <h2>{item.title.rendered}</h2>
                  <span className="date">{item.date.slice(0, 10)}</span>
                </div>
              </Item>
            </Link>
          );
        })}

        <h1>Víkingur</h1>
        {vikingurData.map((item) => {
          return (
            <Link
              key={item.id}
              href={"/news/vikingur/" + item.slug}
              alt={item.title.rendered}
              passHref
            >
              <Item>
                <Image
                  width={350}
                  height={300}
                  className="img"
                  src={ThumbImage}
                  placeholder="blur"
                />
                <div>
                  <h2>{item.title.rendered}</h2>
                  <span className="date">{item.date.slice(0, 10)}</span>
                </div>
              </Item>
            </Link>
          );
        })}

        <h1>KR</h1>
        {krData.map((item) => {
          return (
            <Link
              key={item.id}
              href={"/news/kr/" + item.slug}
              alt={item.title.rendered}
              passHref
            >
              <Item>
                <Image
                  width={350}
                  height={300}
                  className="img"
                  src={ThumbImage}
                  placeholder="blur"
                />
                <div>
                  <h2>{item.title.rendered}</h2>
                  <span className="date">{item.date.slice(0, 10)}</span>
                </div>
              </Item>
            </Link>
          );
        })}

        <h1>International</h1>
        {ittfData.map((item) => {
          return (
            <Link
              key={item.id}
              href={"/news/ittf/" + item.slug}
              alt={item.title.rendered}
              passHref
            >
              <Item>
                <Image
                  width={350}
                  height={300}
                  className="img"
                  src={ThumbImage}
                  placeholder="blur"
                />
                <div>
                  <h2>{item.title.rendered}</h2>
                  <span className="date">{item.date.slice(0, 10)}</span>
                </div>
              </Item>
            </Link>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
  /* hiding trash elements that comes with articles */
  svg {
    display: none;
  }
  .pvc_stats {
    display: none;
  }
  div {
    margin-bottom: 30px;
  }
  h2 {
    color: #333;
    font-weight: bold;
    padding-top: 3px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .date {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 100px auto;
  }
`;

const Item = styled.div`
  @media (min-width: 768px) {
    display: flex;
    /* max-width: 80%; */
    &:hover {
      cursor: pointer;
      transition: ease-in-out 0.3s;
      background-color: #f4f4f4;
      border-radius: 4px;
      -webkit-box-shadow: 0px 10px 39px -6px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 10px 39px -6px rgba(0, 0, 0, 0.1);
      .img {
        border-radius: 4px 0 0 4px;
        opacity: 0.9;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
    }
  }
`;

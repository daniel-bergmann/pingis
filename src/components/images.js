import styled from "styled-components";
import Link from "next/link";
import uuid from "react-uuid";
import Image from "next/image";

export default function Images({ images }) {
  return (
    <ul>
      {images.map((image) => {
        return (
          // used the uuid library for unique id
          <li key={uuid()}>
            <a href={image.link} rel="noreferrer">
              <Container>
                <div className="img">
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt="image from pingis.is"
                  />
                  <div className="text">
                    {/* Sliced the title to show the year */}
                    <h3>{image.title.slice(0, 9)}</h3>
                    <Link href="/shop" passHref>
                      <p className="buy">Buy print</p>
                    </Link>
                  </div>
                </div>
              </Container>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// wrapper
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 60px 0 0 0;
  h3 {
    text-align: center;
  }
  .buy {
    &:hover {
      text-decoration: underline;
    }
  }

  .img {
    .text {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
  }
  @media (min-width: 768px) {
    .img {
      max-width: 800px;
    }
  }
`;

import Image from "next/image";
import styled from "styled-components";
import LoadMoreImage from "../../../public/images/loadmore.svg";

export default function LoadMoreButton({ handleLoadMore }) {
  return (
    <ButtonStyling>
      {/* triggering this makes a new requst to the server adding 10 images below */}
      <button onClick={handleLoadMore}>
        <Image
          width={150}
          height={150}
          src={LoadMoreImage}
          alt="image from pingis.is"
        />
      </button>
    </ButtonStyling>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

const ButtonStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  button {
    height: 10px;
    width: 150px;
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    button {
      height: 80px;
      width: 160px;
    }
  }
`;

import Image from "next/image";
import styled from "styled-components";
import LoadMoreImage from "../../public/images/loadmore.svg";

export default function button({ handleLoadMore }) {
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
    &:hover {
      opacity: 0.9;
      /* Start the shake animation and make the animation last for 0.5 seconds */
      animation: shake 0.5s;

      /* When the animation is finished, start again */
      animation-iteration-count: 0.2s;
    }

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }

      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
    }
  }
`;

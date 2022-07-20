import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import BackButton from "../../../public/images/back-button.svg";

export default function ReturnButton() {
  return (
    <ButtonStyling>
      {/* triggering this makes a new requst to the server adding 10 images below */}
      <Link href={'/news'}>
        <button>
          <Image
            width={150}
            height={150}
            src={BackButton}
            alt="image from pingis.is"
          />
        </button>
      </Link>
    </ButtonStyling>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Styling

const ButtonStyling = styled.div`
  display: flex;
  align-items: flex-start;
  button {
    width: 50px;
  }
  @media (min-width: 768px) {
  }
`;

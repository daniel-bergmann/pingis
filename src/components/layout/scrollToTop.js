import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrLinkTop } from "react-icons";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      {" "}
      {showTopBtn && (
        <button className="icon-position icon-style" onClick={goToTop}>
          Scroll to top
        </button>
      )}{" "}
    </Container>
  );
};
export default ScrollToTop;

const Container = styled.div`
  /* keep button on top of content */
  position: relative;
  button {
    /* position */
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
    /* style */
    background-color: #333;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    color: #fff;
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
    font-size: 11px;
  }
  button:hover {
    animation: none;
    background: #fff;
    color: #333;
    border: 2px solid #333;
  }
  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

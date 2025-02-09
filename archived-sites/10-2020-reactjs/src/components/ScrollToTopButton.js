import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import * as Scroll from "react-scroll";

const ScrollToTopButton = () => {
  const handleClick = () => {
    Scroll.animateScroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };
  return (
    <button className="scroll-to-top" onClick={handleClick}>
      <FaArrowAltCircleUp className="icon-top has-text-grey" />
    </button>
  );
};

export default ScrollToTopButton;

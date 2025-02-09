import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import * as Scroll from "react-scroll";
import styles from "../../styles/ScrollToTop.module.scss";

const ScrollToTopButton = () => {
  const [scrollTop, setCrollTop] = useState<number>(0);
  useEffect(() => {
    window.onscroll = () => {
      setCrollTop(window.scrollY);
    };
  }, [setCrollTop]);
  const handleClick = () => {
    Scroll.animateScroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };
  return (
    <>
      {scrollTop > 10 ? (
        <button className={styles["scroll-to-top"]} onClick={handleClick}>
          <FaArrowAltCircleUp className={styles["arrow-icon"]} />
        </button>
      ) : (
        <button className={styles["scroll-to-top-disappear"]} onClick={handleClick}>
          <FaArrowAltCircleUp className={styles["arrow-icon"]} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

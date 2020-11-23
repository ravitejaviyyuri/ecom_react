import React from "react";
import styles from "./scrollup.module.scss";

const handleScrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollUp = () => {
  return (
    <div className={styles.scrollup_container}>
      <div className={styles.scrollup_btn} onClick={handleScrollUp}>
        SCROLL UP
      </div>
    </div>
  );
};

export default ScrollUp;

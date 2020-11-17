import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./responsivefooter.module.scss";

const ResponsiveFooter = () => {
  return <section className={styles.responsive_footer}>
      <Button className={styles.duq_btn}>Drop us a Query</Button>
      <Button className={styles.enroll_btn}>Enroll Now</Button>
  </section>;
};

export default ResponsiveFooter;

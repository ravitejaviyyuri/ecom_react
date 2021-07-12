import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "react-bootstrap/Button";
import styles from "./responsivefooter.module.scss";
import DUQ from "../DUQ.component";

const ResponsiveFooter = (props : any) => {
  const [showDUQ, setDUQ] = useState(false);

  const handleDUQ = () => {
    setDUQ(!showDUQ);
  };

  return (
    <section className={styles.responsive_footer}>
      <Button className={styles.duq_btn} onClick={handleDUQ}>
        Drop us a Query
      </Button>
      <Button className={styles.enroll_btn}>Enroll Now</Button>
      <CSSTransition
        in={showDUQ}
        timeout={400}
        classNames="duq-transition"
        appear
        unmountOnExit
      >
        <DUQ setDUQ={setDUQ} countries={props.countries} />
      </CSSTransition>
    </section>
  );
};

export default ResponsiveFooter;

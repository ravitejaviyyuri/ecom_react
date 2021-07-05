import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CountryCodeSelect from "./CountryCodeSelect.component";
import styles from "./duq.module.scss";
import { PhoneIcon } from "./icons/phoneicon";
import { DownChevronIcon } from "./icons/downchevronicon";

const DUQ = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  const [isMob, setMob] = useState(false);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
        setOpen(true);
      } else {
        setMob(false);
      }
    }
  }, []);

  const handleClick = () => {
    setOpen(!isOpen);
    if (isMob) {
      props.setDUQ(false);
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={400} classNames="duq-transition" appear>
      <div className={styles.DUQ_container}>
        <div className={styles.header} onClick={handleClick}>
          <span className={styles.title}>Drop us a Query</span>
          <span
            className={`${styles.chevron_icon} ${
              isOpen ? styles.closed : styles.open
            }`}
          >
            <DownChevronIcon color="#27b8cc" />
          </span>
        </div>
        <CSSTransition unmountOnExit in={isOpen} timeout={400} appear>
          <div className={styles.body}>
            <div className={styles.top_section}>
                <img src="/24x7-available.png" alt="image" />
                <span className={styles.info}>
                  Available 24x7 for your queries
                </span>
            </div>
            <Form className={styles.form}>
              <Form.Group controlId="duqFormTextarea">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your query here*"
                  className={styles.input}
                />
              </Form.Group>
              <Form.Group
                controlId="duqFormPhoneNumber"
                className="position-relative"
              >
                <Form.Label className={styles.label}>Phone Number</Form.Label>
                <CountryCodeSelect className={styles.code_select} options=""/>
                <Form.Control
                  className={`${styles.input} ${styles.phone_input}`}
                  type="tel"
                  placeholder="Enter Phone Number*"
                />
              </Form.Group>
              <Form.Group controlId="duqFormEmail">
                <Form.Label className={styles.label}>Email Id</Form.Label>
                <Form.Control
                  className={styles.input}
                  type="email"
                  placeholder="eg@saga.gmail.com"
                />
              </Form.Group>
              <Button className={styles.submit} variant="primary">
                SUBMIT QUERY
              </Button>
            </Form>
            <div className={styles.talktous}>
              <span>Or, talk to a course Counsellor</span>
              <a href="callto:+14072345678">Call +1 407 2345678</a>
            </div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default DUQ;

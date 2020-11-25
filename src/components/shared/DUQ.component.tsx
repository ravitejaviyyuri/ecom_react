import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CountryCodeSelect from "./CountryCodeSelect.component";
import styles from "./duq.module.scss";

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
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="15"
            viewBox="0 0 1024 1024"
            className={isOpen ? styles.open : styles.closed}
          >
            <title></title>
            <g id="icomoon-ignore"></g>
            <path
              fill="#ffffff"
              d="M0 707.765l496.941-496.941 497.544 496.941-85.534 85.534-412.009-412.009-412.009 412.009-84.932-85.534z"
            ></path>
          </svg>
        </div>
        <CSSTransition unmountOnExit in={isOpen} timeout={400} appear>
          <div className={styles.body}>
            <div className={styles.top_section}>
              <div className={styles.phone_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.523"
                  height="16.491"
                  viewBox="0 0 16.523 16.491"
                >
                  <path
                    id="Path_24546"
                    data-name="Path 24546"
                    d="M53.8,12.05l-2.3-2.3a1.569,1.569,0,0,0-2.2,0,2.092,2.092,0,0,0-.4.6,1.566,1.566,0,0,1-1.8,1,7.3,7.3,0,0,1-4.3-4.3,1.431,1.431,0,0,1,1-1.8,1.584,1.584,0,0,0,1-1.9,2.092,2.092,0,0,0-.4-.6L42.1.45a1.569,1.569,0,0,0-2.2,0l-1.6,1.6c-1.6,1.6.2,6,4,9.8,3.9,3.9,8.2,5.7,9.8,4l1.6-1.6a1.485,1.485,0,0,0,.1-2.2"
                    transform="translate(-37.719)"
                    fill="#192f60"
                  />
                </svg>
              </div>
              <div className={styles.contact_info}>
                <span className={styles.number}>08040423753</span>
                <span className={styles.info}>
                  Available 24x7 for your queries
                </span>
              </div>
            </div>
            <Form className={styles.form}>
              <Form.Group
                controlId="duqFormPhoneNumber"
                className="position-relative"
              >
                <Form.Label className={styles.label}>Phone Number</Form.Label>
                <CountryCodeSelect className={styles.code_select} />
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
              <Form.Group controlId="duqFormTextarea">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your query here*"
                  className={styles.input}
                />
              </Form.Group>
              <Button className={styles.submit} variant="primary">
                SUBMIT QUERY
              </Button>
            </Form>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default DUQ;

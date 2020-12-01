import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./faqaccordion.module.scss";
const FAQAccordion = (props: any) => {
  const [activeId, setActiveId] = useState("0");
  const toggleActive = (id: any) => {
    if (activeId === id) {
      setActiveId("");
    } else {
      setActiveId(id);
    }
  };
  return (
    <Accordion defaultActiveKey={activeId}>
      {props.faq.map((value: any, index: number) => {
        return (
          <Card key={String(index)} className={styles.accordion_card}>
            <Accordion.Toggle
              className={`${styles.accordion_header}  ${
                activeId === String(index) ? styles.active : ""
              }`}
              as={Card.Header}
              eventKey={String(index)}
              onClick={() => toggleActive(String(index))}
            >
              {value.question}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="15"
                viewBox="0 0 1024 1024"
                className={activeId === String(index) ? styles.open : styles.closed}
              >
                <title></title>
                <g id="icomoon-ignore"></g>
                <path
                  fill="#95accd"
                  d="M0 707.765l496.941-496.941 497.544 496.941-85.534 85.534-412.009-412.009-412.009 412.009-84.932-85.534z"
                ></path>
              </svg>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={String(index)}>
              <Card.Body className={styles.accordion_body}>
                {value.answer}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;

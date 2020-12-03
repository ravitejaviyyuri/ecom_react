import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./faqaccordion.module.scss";
import { DownChevronIcon } from "../../shared/icons/downchevronicon";

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
              <span
                className={`${styles.chevron_icon} ${
                  activeId === String(index) ? styles.open : styles.closed
                }
                `}
              >
                <DownChevronIcon color="#95accd" />
              </span>
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

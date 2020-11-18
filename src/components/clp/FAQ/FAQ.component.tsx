import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "./FAQAccordion.component";
import OpenForm from "../OpenForm/OpenForm.component";
import styles from "./faq.module.scss";

const faq1 = [
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
];
const faq2 = [
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
  {
    question: "What are the system requirements for this course?",
    answer:
      "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance In this course you will learn about Version Controlling Code Automation, Continuous Integration",
  },
];

const ICE = () => {
  const [isMob, setMob] = useState(false);
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
  }, []);
  return (
    <section className={styles.faq_section}>
      <Container>
        <Row>
          <div className={styles.heading}>Frequently asked questions</div>
          <Col>
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav
                    variant="pills"
                    className="flex-row justify-content-center align-items-center"
                  >
                    <div className={styles.selector_container}>
                      <Nav.Item>
                        <Nav.Link className={styles.nav_link} eventKey="first">
                          Course Specific
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className={styles.nav_link} eventKey="second">
                          General Queries
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </Nav>
                </Col>
                <Col sm={12} className={styles.tab_col}>
                  <Tab.Content className={styles.tab_content}>
                    <Tab.Pane eventKey="first">
                      <Accordion faq={faq1} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Accordion faq={faq2} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          {isMob ? null : (
            <Col className="d-flex justify-content-center mt-5">
              <OpenForm />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ICE;

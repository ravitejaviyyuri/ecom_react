import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./learnedu.module.scss";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const LearningByEdureka = () => {
  return (
    <section className={styles.LearningEdu_section}>
      <Container>
        <div className={styles.section_title}>
          The Future of Learning is Here - 360° Learning by Edureka
        </div>
        <Row>
          <Col>
            <Card className={styles.card_over}>
              <div className={styles.card_img}>
                <Image
                  src="/1_live_class.png"
                  width="166"
                  height="99"
                  loading="lazy"
                />
              </div>
              <Card.Body className="p-0">
                <Card.Title className={styles.card_title}>
                  Live Interactive Learning
                </Card.Title>
                <div>
                  <ul>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      World-Class Instructors
                    </li>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Expert-Led Mentoring Sessions
                    </li>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      High-Impact Exhaustive Training
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card_over}>
              <div className={styles.card_img}>
                <Image
                  src="/2_personal_Lm.png"
                  width="152"
                  height="108"
                  loading="lazy"
                />
              </div>
              <Card.Body className="p-0">
                <Card.Title className={styles.card_title}>
                  Personal Learning Manager
                </Card.Title>
                <div>
                  <ul>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Resolved All Your Doubts Instantly
                    </li>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Get One-On-One Learning Assistance Round The Clock
                    </li>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Guarantee that Your Learning is Never Compromised
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card_over}>
              <div className={styles.card_img}>
                <Image
                  src="/3_hands_on.png"
                  width="134"
                  height="100"
                  loading="lazy"
                />
              </div>
              <Card.Body className="p-0">
                <Card.Title className={styles.card_title}>
                  Hands-On Project Based Learning
                </Card.Title>
                <div>
                  <ul>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Industry-Relevant Projects
                    </li>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Quizzes & Assignments
                    </li>
                    <li>
                      <TickCircleIcon color="#36b37e" />
                      Unlimited access to Class Recording, Resources & more!
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LearningByEdureka;

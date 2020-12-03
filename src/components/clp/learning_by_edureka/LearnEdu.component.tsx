import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./learnedu.module.scss";

class LearningByEdureka extends React.Component {
  render() {
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
                    height="100"
                    loading="lazy"
                  />
                </div>
                <Card.Body className="p-0">
                  <Card.Title className={styles.card_title}>
                    Live Interactive Learning{" "}
                  </Card.Title>
                  <div>
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
                        World-Class Instructors
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
                        Expert-Led Mentoring Sessions
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
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
                    width="166"
                    height="100"
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
                        Resolved All Your Doubts Instantly
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
                        Get One-On-One Learning Assistance Round The Clock
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
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
                    width="166"
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
                        Industry-Relevant Projects
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
                        Quizzes & Assignments
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 25 25"
                        >
                          <path
                            id="Path_24541"
                            data-name="Path 24541"
                            d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                            fill="#75d505"
                          />
                        </svg>
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
  }
}

export default LearningByEdureka;

import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./curriculumaccordion.module.scss";
import DownloadButton from "./DownloadSyllabus.component";

const CurriculumAccordion = (props: any) => {
  const [activeId, setActiveId] = useState("0");
  const [isMob, setMob] = useState(false);

  const toggleActive = (id: any) => {
    if (activeId === id) {
      setActiveId("");
    } else {
      setActiveId(id);
    }
  };

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
    <Accordion defaultActiveKey={activeId}>
      {props.curriculum.map((value: any, index: number) => {
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
              <span className={styles.header_title}>{value.title}</span>
              <div className={styles.header_right_section}>
                <span className={styles.header_topics}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                  >
                    <g
                      id="Group_10752"
                      data-name="Group 10752"
                      transform="translate(14967.047 1159.253)"
                    >
                      <g id="Group_10750" data-name="Group 10750">
                        <path
                          id="Path_24560"
                          data-name="Path 24560"
                          d="M57.953,366.747h-15v2h15Z"
                          transform="translate(-15010 -1526)"
                          fill="#5a6484"
                        />
                        <rect
                          id="Rectangle_3451"
                          data-name="Rectangle 3451"
                          width="11"
                          height="2"
                          transform="translate(-14967.047 -1154.253)"
                          fill="#5a6484"
                        />
                        <rect
                          id="Rectangle_3452"
                          data-name="Rectangle 3452"
                          width="9"
                          height="2"
                          transform="translate(-14967.047 -1149.253)"
                          fill="#5a6484"
                        />
                      </g>
                    </g>
                  </svg>
                  {value.nooftopics} Topics
                </span>
                <span className={styles.header_assignments}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.14"
                    height="14.763"
                    viewBox="0 0 16.14 14.763"
                  >
                    <g
                      id="Group_10751"
                      data-name="Group 10751"
                      transform="translate(14941.135 1158.929)"
                    >
                      <path
                        id="Path_24559"
                        data-name="Path 24559"
                        d="M81.653,367.147a2.531,2.531,0,0,0-1.8,1l-7.4,7.4a2.4,2.4,0,0,0-.7,1.2,2.121,2.121,0,0,0,1.7,2.4h.7a1.863,1.863,0,0,0,1.2-.7l6.8-6.8a.447.447,0,0,0,0-.5l-.5-.5a.443.443,0,0,0-.5,0l-6.9,6.9a.785.785,0,0,1-1.1,0,.666.666,0,0,1,0-1l7.6-7.6a1.656,1.656,0,0,1,1.2-.5,1.752,1.752,0,0,1,1.7,1.7,1.845,1.845,0,0,1-.5,1.2l-7.9,8.2a3.11,3.11,0,0,1-1.8.9,2.839,2.839,0,0,1-3.2-2.5v-.6a2.839,2.839,0,0,1,.9-1.8l7.4-7.4a.447.447,0,0,0,0-.5l-.5-.5a.443.443,0,0,0-.5,0l-7.4,7.4a4.244,4.244,0,0,0,5.9,6.1l.1-.1,8-8.3a3.02,3.02,0,0,0-.1-4.3,2.946,2.946,0,0,0-2.4-.8"
                        transform="translate(-15010 -1526)"
                        fill="#5a6483"
                      />
                    </g>
                  </svg>
                  {value.noofassignments} Assignments
                </span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="15"
                  viewBox="0 0 1024 1024"
                  className={`${styles.caret_icon} ${
                    activeId === String(index) ? styles.open : styles.closed
                  }`}
                >
                  <title></title>
                  <g id="icomoon-ignore"></g>
                  <path
                    fill="#95accd"
                    d="M0 707.765l496.941-496.941 497.544 496.941-85.534 85.534-412.009-412.009-412.009 412.009-84.932-85.534z"
                  ></path>
                </svg>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={String(index)}>
              <Card.Body className={styles.accordion_body}>
                <Row className={styles.body_row}>
                  <Col xs={12} sm={12} md={5} className={styles.topics_col}>
                    <h6>Topics</h6>
                    <ul>
                      {value.topics.map((value: any, index: number) => {
                        return (
                          <li key={index}>
                            {value}
                            <span
                              className={styles.preview}
                              onClick={props.handleShow}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  d="M511.6 18.7c-275.7 0-494.8 219.1-494.8 494.8s219.1 494.8 494.8 494.8 494.8-219.1 494.8-494.8c7-275.7-219.1-494.8-494.8-494.8zM377.3 718.4v-410l353.4 205-353.4 205z"
                                  fill="#1546eb"
                                />
                              </svg>
                              Watch Preview
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    {!isMob && <DownloadButton />}
                  </Col>
                  <Col xs={12} sm={12} md={7} className={styles.exp_skill_col}>
                    <Row className={styles.exp_skill_row}>
                      <Col xs={12} sm={12} md={6}>
                        <div className={`${styles.exp_skill_card}`}>
                          <h6>HANDS ON</h6>
                          <div>
                            <img src="/curriculum_img.png" alt="" />
                            <ul>
                              {value.handson.map(
                                (value: any, index: number) => {
                                  return <li key={index}>{value}</li>;
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={6}>
                        <div className={`${styles.exp_skill_card}`}>
                          <h6>SKILLS YOU WILL LEARN</h6>
                          <div>
                            <img src="/curriculum_img.png" alt="" />
                            <ul>
                              {value.skills.map((value: any, index: number) => {
                                return <li key={index}>{value}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </Col>
                      {isMob && <DownloadButton />}
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

export default CurriculumAccordion;

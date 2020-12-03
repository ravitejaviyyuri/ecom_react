import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./curriculumaccordion.module.scss";
import DownloadButton from "./DownloadSyllabus.component";
import { HamMenu } from "../../shared/icons/hammenu";
import { LinkIcon } from "../../shared/icons/linkicon";
import { DownChevronIcon } from "../../shared/icons/downchevronicon";
import { VideoIcon } from "../../shared/icons/videoicon";

const CurriculumAccordion = (props: any) => {
  const ref = useRef<any>(null);
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

  useEffect(() => {
    if (ref.current !== null) {
      if (process.browser) {
        setTimeout(() => {
          if (isMob) {
            if (ref.current.getBoundingClientRect().height > 1125) {
              props.setShowExpand(true);
            } else {
              props.setShowExpand(false);
            }
          } else {
            if (ref.current.getBoundingClientRect().height > 1050) {
              props.setShowExpand(true);
            } else {
              props.setShowExpand(false);
            }
          }
        }, 400);
      }
    }
  }, [activeId]);

  return (
    <Accordion ref={ref} defaultActiveKey={activeId}>
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
                  <HamMenu color="#5a6484" />
                  {value.nooftopics} Topics
                </span>
                <span className={styles.header_assignments}>
                  <LinkIcon color="#5a6484" />
                  {value.noofassignments} Assignments
                </span>
                <span
                  className={`${styles.caret_icon} ${
                    activeId === String(index) ? styles.open : styles.closed
                  }`}
                >
                  <DownChevronIcon color="#5a6483" />
                </span>
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
                              onClick={props.handleShowWatchVideo}
                            >
                              <VideoIcon color="#1546eb" />
                              Watch Preview
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    {!isMob && (
                      <DownloadButton
                        onClick={props.handleShowDownloadSyllabus}
                      />
                    )}
                  </Col>
                  <Col xs={12} sm={12} md={7} className={styles.exp_skill_col}>
                    <Row className={styles.exp_skill_row}>
                      <Col xs={12} sm={12} md={6}>
                        <div className={`${styles.exp_skill_card}`}>
                          <h6>HANDS ON</h6>
                          <div>
                            <div>
                              <Image
                                width={63}
                                height={76}
                                loading="lazy"
                                src="/curriculum_img.png"
                                alt="curriculum"
                                layout="fixed"
                              />
                            </div>
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
                            <div>
                              <Image
                                width={63}
                                height={76}
                                loading="lazy"
                                src="/curriculum_img.png"
                                alt="curriculum"
                                layout="fixed"
                              />
                            </div>
                            <ul>
                              {value.skills.map((value: any, index: number) => {
                                return <li key={index}>{value}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </Col>
                      {isMob && (
                        <DownloadButton
                          onClick={props.handleShowDownloadSyllabus}
                        />
                      )}
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

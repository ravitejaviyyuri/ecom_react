import React, { useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./knowyourcourse.module.scss";
import { SalaryIcon } from "../../shared/icons/salaryicon";
import { JobIcon } from "../../shared/icons/jobicon";
import { MoneyIcon } from "../../shared/icons/moneyicon";
import { ScheduleIcon } from "../../shared/icons/scheduleicon";
import { LiveClassIcon } from "../../shared/icons/liveclassicon";
import { TestIcon } from "../../shared/icons/testicon";
import { AssignmentIcon } from "../../shared/icons/assignmenticon";
import { ProjectIcon } from "../../shared/icons/projecticon";
import { CertificateIcon } from "../../shared/icons/certificateicon";

const MAX_ITEMS = 3;

const titlekwmore = [
  {
    title1: "What are the system requirements for this course?",
    title2: "What are the system requirements for this course?",
  },
];

const KnowYourCourse = ({knowYourCourse, getaGlimpse, courseOverview}:any) => {

  knowYourCourse = knowYourCourse.section_details;
  getaGlimpse = getaGlimpse.section_details;
  courseOverview = courseOverview.section_details;

  const formattedKnowYourCourse: any = knowYourCourse.map((value: any) => {
    const title = value.subsection_title;
    const parsedValue = JSON.parse(value.subsection_content);
    const cardImageName = parsedValue.get_to_know_image;
    const question = parsedValue.get_to_know_question;
    const answer = parsedValue.get_to_know_answer;
    return {
      title,
      cardImageName,
      question,
      answer
    }
  });

  const formattedGetaGlimpse: any = getaGlimpse.map((value: any) => {
    const title = value.subsection_title;
    const parsedValue = JSON.parse(value.subsection_content);
    const cardImageName = parsedValue.get_glimpse_image;
    const keyStat = parsedValue.get_glimpse_key_stat;
    const keyStatDescription = parsedValue.get_glimpse_key_stat_desc;
    return {
      title,
      cardImageName,
      keyStat,
      keyStatDescription
    }
  });

  let formattedCourseOverview: any = courseOverview.map((value: any) => {
    const title = value.subsection_title;
    const parsedValue = JSON.parse(value.subsection_content);
    const courseDuration = parsedValue.course_duration;
    const noOfLiveClasses = parsedValue.no_of_live_classes;
    const noOfAssignments = parsedValue.number_of_assingments;
    const noOfProjects = parsedValue.number_of_projects;
    const nameOfCertificate = parsedValue.name_of_certificate;
    return {
      title,
      courseDuration,
      noOfLiveClasses,
      noOfAssignments,
      noOfProjects,
      nameOfCertificate
    }
  });

  formattedCourseOverview = Object.assign({}, ...formattedCourseOverview);

  let leftitems: string[] = [];
  let rightitems: string[] = [];

  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  leftitems = [
    "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance",
    "In this course you will learn about Version Controlling",
    "Code Automation, Continuous Integration",
    "Item 4",
    "Item 5",
  ];
  rightitems = [
    "DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance",
    "In this course you will learn about Version Controlling",
    "Code Automation, Continuous Integration",
    "Item 4",
    "Item 5",
  ];

  const toggle = (event: any) => {
    if (event.target.id == "test1") setOpen1(!isOpen1);
    else if (event.target.id == "test2") setOpen2(!isOpen2);
  };

  const getRenderedLeftItems = () => {
    if (isOpen1) {
      return leftitems;
    }
    return leftitems.slice(0, MAX_ITEMS);
  };

  const getRenderedRightItems = () => {
    if (isOpen2) {
      return rightitems;
    }
    return rightitems.slice(0, MAX_ITEMS);
  };

  return (
    <section className={styles.kw_course_section}>
      <Container>
        <div className={styles.section_title}>Get to know your course</div>
        <div className={styles.kw_course_card}>
          <Row>
            <Col className={`${styles.learn_bx} ${styles.padding_r_30}`} lg={6}>
              <div className={`${styles.image_info} ${styles.back_blue}`}>
                <span>What will you learn as a part of this course?</span>
                <div className={styles.img_div}>
                  <Image
                    src="/what_i_learn.png"
                    width="185"
                    height="147"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.ul_bx}>
                <ul>
                  {getRenderedLeftItems().map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
                <button id="test1" onClick={toggle}>
                  {isOpen1 ? "READ LESS" : "READ MORE"}
                </button>
              </div>
            </Col>
            <Col className={`${styles.learn_bx} ${styles.padding_l_30}`} lg={6}>
              <div className={`${styles.image_info} ${styles.back_green}`}>
                <span>What skills you will learn with DevOps course?</span>
                <div className={styles.img_div}>
                  <Image
                    src="/skill_i_learn.png"
                    width="216"
                    height="143"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.ul_bx}>
                <ul>
                  {getRenderedRightItems().map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
                <button id="test2" onClick={toggle}>
                  {isOpen2 ? "READ LESS" : "READ MORE"}
                </button>
              </div>
            </Col>
          </Row>
          <Row className={styles.extra_info_this}>
            <Col className={`${styles.extra_bx} ${styles.padding_r_30}`} lg={6}>
              <div className={styles.title}>
                Who should go for this training?
              </div>
              <p>
                The following professionals can go for this course:
                Software Tester, System Admin, Solution Architect, Security
                Engineer, Application Developers etc.
              </p>
            </Col>
            <Col className={`${styles.extra_bx} ${styles.padding_l_30}`} lg={6}>
              <div className={styles.title}>
                What are the pre-requisites for this Course?
              </div>
              <p>
                To help you brush up these skills, you will get the following
                self-paced modules as pre-requisites in your LMS:
              </p>
              <p>Python Scripting & Linux Fundamentals</p>
            </Col>
          </Row>

          <div className={styles.relative_bx}>
            <div className={styles.absolute_bx}>
              <div className={styles.title}>Glimpse of future</div>
              <Row className={styles.glim_row}>
                {formattedGetaGlimpse.map((value: any, index: any) => {
                  return (
                    <Col key={String(index)} className={styles.glim_bx}>
                      <div className={styles.heading}>
                        <SalaryIcon color="#5e98ee" />
                        <div className={styles.icon_text}>{value.keyStat}</div>
                      </div>
                      <p className={styles.text}>
                        {value.keyStatDescription}
                      </p>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </div>
        </div>

        <div className={styles.list_item_info_course}>
          <ul>
            <li>
              <ScheduleIcon color="#5e98ee" />
              <span>{formattedCourseOverview.courseDuration}</span>
            </li>
            <li>
              <LiveClassIcon color="#5e98ee" />
              <span>{formattedCourseOverview.noOfLiveClasses}</span>
            </li>
            <li>
              <TestIcon color="#5e98ee" />
              <span>8 tests</span>
            </li>
            <li>
              <AssignmentIcon color="#5e98ee" />
              <span>{formattedCourseOverview.noOfAssignments}</span>
            </li>
            <li>
              <ProjectIcon color="#5e98ee" />
              <span>{formattedCourseOverview.noOfProjects}</span>
            </li>
            <li>
              <CertificateIcon color="#5e98ee" />
              <span>{formattedCourseOverview.nameOfCertificate}</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default KnowYourCourse;

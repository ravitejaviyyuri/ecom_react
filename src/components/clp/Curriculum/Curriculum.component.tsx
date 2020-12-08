import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./curriculum.module.scss";
import CurriculumAccordion from "./CurriculumAccordion.component";
import DownloadCurriculum from "./DownloadCurriculum.component";
import WatchVideoPopup from "../WatchVideoPopup/WatchVideoPopup.component";
import { AdobeIcon } from "../../shared/icons/adobeicon";
import { DownChevronIcon } from "../../shared/icons/downchevronicon";

const curriculumData = [
  {
    title: "Overview of Devops 1",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 2",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 3",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 4",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 5",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 6",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 7",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
  {
    title: "Overview of Devops 8",
    nooftopics: 3,
    noofassignments: 5,
    topics: [
      "What is version control Preview",
      "What is Git",
      "Why Git for your organization Preview Install",
      "Common commands in Git",
      "Working with Remote Repositories",
    ],
    handson: [
      "Installing Ansible Configuring Ansible Role",
      "Write Playbooks",
      "Execute adhoc commands",
    ],
    skills: [
      "Statistics & Optimisation",
      "Predictive Modelling",
      "Business Problem Solving",
    ],
  },
];

const Curriculum = ({course_section}:any) => {
  const [isMob, setMob] = useState(false);
  const [showExpand, setShowExpand] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showDownloadSyllabus, setDownloadSyllabus] = useState(false);
  const [showWatchVideo, setWatchVideo] = useState(false);

  const handleCloseDownloadSyllabus = () => setDownloadSyllabus(false);
  const handleShowDownloadSyllabus = () => setDownloadSyllabus(true);
  const handleCloseWatchVideo = () => setWatchVideo(false);
  const handleShowWatchVideo = () => setWatchVideo(true);

  const handleClick = () => {
    setExpand(!expand);
  };

  const curicullumData = course_section.section_details;
  const formattedData:any = curicullumData.map((value:any)=>{
    const title = value.subsection_title;
    const parsedValue = JSON.parse(value.subsection_content);
    const noofassignments = parsedValue.numberOfAssingments;
    const nooftopics = parsedValue.numberOfTopics;
    const handson = parsedValue.handsOn;
    const skills = parsedValue.skillsTolearn;
    const topics = parsedValue.topics;
    return{
      title,
      noofassignments,
      nooftopics,
      skills,
      handson,
      topics
    }

  });
  

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
      console.log(formattedData);
    }
  }, []);

  return (
    <section
    id="curriculum"
      className={`${styles.curriculum_section} ${
        expand ? styles.section_full : null
      }`}
    >
      <Container>
        <Row>
          <div className={styles.heading}>
            <h3>Curriculum</h3>
            <div>
              <AdobeIcon />
              <span onClick={handleShowDownloadSyllabus}>
                Download Syllabus
              </span>
            </div>
          </div>
          <Col xs={12} className={styles.curriculum_accor_col}>
            <CurriculumAccordion
              curriculum={formattedData}
              handleShowDownloadSyllabus={handleShowDownloadSyllabus}
              handleShowWatchVideo={handleShowWatchVideo}
              setShowExpand={setShowExpand}
            />
          </Col>
        </Row>
      </Container>

      {showExpand && (
        <div className={styles.expand}>
          <div className={styles.circle} onClick={handleClick}>
            <div
              className={`${styles.expand_icon} ${
                expand ? styles.open : styles.closed
              }`}
            >
              <DownChevronIcon color="#0849a7" />
            </div>
          </div>
        </div>
      )}

      <DownloadCurriculum
        show={showDownloadSyllabus}
        handleClose={handleCloseDownloadSyllabus}
      />
      <WatchVideoPopup
        show={showWatchVideo}
        handleClose={handleCloseWatchVideo}
      />
    </section>
  );
};

export default Curriculum;

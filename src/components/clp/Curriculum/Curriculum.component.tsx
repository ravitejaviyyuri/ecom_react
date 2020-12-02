import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./curriculum.module.scss";
import CurriculumAccordion from "./CurriculumAccordion.component";
import DownloadCurriculum from "./DownloadCurriculum.component";
import WatchVideoPopup from "../WatchVideoPopup/WatchVideoPopup.component";

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
type Props = {
  course_section: any
}

const Curriculum = ({course_section}: Props) => {
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

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
  }, []);
console.log("curriculum");
console.log(JSON.parse(course_section.section_details[0].subsection_content).handsOn);
  return (
    <section
      className={`${styles.curriculum_section} ${
        expand ? styles.section_full : null
      }`}
    >
      <Container>
        <Row>
          <div className={styles.heading}>
            <h3>Curriculum</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="prefix__a">
                    <path
                      data-name="Path 6529"
                      d="M9.222-13.778a4.123 4.123 0 00.222-1V-15a1.735 1.735 0 000-1.111v-.111l-.111-.111a.109.109 0 01-.111.111 4.52 4.52 0 000 2.444zM5.889-6.111a2.429 2.429 0 00-.556.333A5.475 5.475 0 003.889-4c.667-.111 1.333-.778 2-2.111zm10.222-1.667C16-7.889 15.556-8.222 14-8.222h-.222v.111a5.964 5.964 0 002.111.556h.333v-.111a.109.109 0 01-.111-.112zM17.778-20H2.222A2.229 2.229 0 000-17.778v15.556A2.229 2.229 0 002.222 0h15.556A2.229 2.229 0 0020-2.222v-15.556A2.229 2.229 0 0017.778-20zM16.556-6.889a2.219 2.219 0 01-1 .222 8.01 8.01 0 01-3.333-.778 18.3 18.3 0 00-4.444.889c-.111 0-.111 0-.222.111C6.222-4.111 5.111-3 4.222-3 4-3 3.889-3 3.778-3.111l-.556-.333v-.111a1 1 0 01-.111-.556 4.277 4.277 0 012.111-2.333c.222-.111.556-.333 1-.556.333-.556.667-1.222 1.111-2a23.507 23.507 0 001.222-3.222 5.157 5.157 0 01-.222-3.667c.111-.444.444-.889.889-.889h.222a1.579 1.579 0 01.667.222c.778.778.444 2.556 0 4v.111a8.025 8.025 0 001.778 2.889 7.8 7.8 0 001 .667c.556 0 1-.111 1.444-.111 1.333 0 2.222.222 2.556.778a1.409 1.409 0 01.111.666 6.805 6.805 0 01-.444.667zm-7.223-4.333a23.139 23.139 0 01-1.111 2.666c-.222.444-.444.778-.667 1.222h.222a16.809 16.809 0 013.667-1A1.533 1.533 0 0111-8.667a11.3 11.3 0 01-1.667-2.555z"
                      fill="none"
                    />
                  </clipPath>
                  <clipPath id="prefix__b">
                    <path
                      data-name="Path 6528"
                      d="M-547 9492H819V-4893H-547z"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g data-name="Group 10687">
                  <g
                    data-name="Group 8195"
                    clipPath="url(#prefix__a)"
                    transform="translate(0 20)"
                  >
                    <g data-name="Group 8194" clipPath="url(#prefix__b)">
                      <path
                        data-name="Path 6527"
                        d="M-5-25h30V5H-5z"
                        fill="#ea6262"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span onClick={handleShowDownloadSyllabus}>
                Download Syllabus
              </span>
            </div>
          </div>
          <Col xs={12} className={styles.curriculum_accor_col}>
            <CurriculumAccordion
              curriculum={curriculumData}
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
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1024"
              height="1024"
              viewBox="0 0 1024 1024"
              className={`${styles.expand_icon} ${
                expand ? styles.open : styles.closed
              }`}
            >
              <title></title>
              <g id="icomoon-ignore"></g>
              <path
                fill="#0849a7"
                d="M994.485 295.755l-497.544 497.544-496.941-497.544 84.932-84.932 412.009 412.009 412.009-412.009 85.534 84.932z"
              ></path>
            </svg>
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

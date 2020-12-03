import React, { useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./knowyourcourse.module.scss";

const MAX_ITEMS = 3;

const titlekwmore = [
  {
    title1: "What are the system requirements for this course?",
    title2: "What are the system requirements for this course?",
  },
];

const KnowYourCourse = () => {
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
              <p>The following professionals can go for this course:</p>
              <p>
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
                <Col className={styles.glim_bx}>
                  <div className={styles.heading}>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1229"
                      height="1024"
                      viewBox="0 0 1229 1024"
                    >
                      <title></title>
                      <g id="icomoon-ignore"></g>
                      <path
                        fill="#5e98ee"
                        d="M896 368.641c-64.932 0-117.756 52.822-117.756 117.759 0 64.939 52.824 117.763 117.756 117.763 64.939 0 117.763-52.824 117.763-117.763 0-64.937-52.824-117.759-117.763-117.759zM896 682.667c-108.214 0-196.267-88.051-196.267-196.267 0-108.214 88.053-196.267 196.267-196.267 108.218 0 196.267 88.053 196.267 196.267 0 108.216-88.048 196.267-196.267 196.267v0z"
                      ></path>
                      <path
                        fill="#5e98ee"
                        d="M1158.234 1024l-65.899-210.82h-392.671l-65.899 210.82-70.566-25.097 74.378-237.925c5.066-16.19 19.268-27.112 35.284-27.112h446.277c16.014 0 30.216 10.922 35.284 27.112l74.376 237.925-70.566 25.097z"
                      ></path>
                      <path
                        fill="#5e98ee"
                        d="M484.785 972.8c-267.31 0-484.785-218.201-484.785-486.4 0-268.203 217.475-486.4 484.785-486.4 141.907 0 276.242 62.11 368.549 170.406l-62.021 53.221c-76.785-90.082-188.512-141.746-306.528-141.746-222.312 0-403.174 181.467-403.174 404.519 0 223.050 180.863 404.519 403.174 404.519v81.881z"
                      ></path>
                      <path
                        fill="#5e98ee"
                        d="M483.525 519.798v79.163c30.501-3.825 45.753-16.282 45.753-37.357 0-17.072-15.253-31.006-45.753-41.806zM436.8 431.491v-82.823c-29.653 4.355-44.478 16.981-44.478 37.883 0 17.939 14.825 32.92 44.478 44.94zM483.525 660.103v56.697h-46.725v-55.127c-43.306-0.178-83.633-8.189-120.961-24.040v-72.373c12.375 8.189 30.827 15.763 55.361 22.731 24.53 6.97 46.394 10.971 65.6 12.022v-95.104c-49.924-15.154-84.001-31.572-102.241-49.25s-27.359-39.235-27.359-64.663c0-27.351 11.84-50.643 35.52-69.894 23.68-19.244 55.040-30.438 94.080-33.57v-48.598h46.725v47.551c45.004 1.742 78.607 7.665 100.795 17.767v70.54c-29.869-14.805-63.467-23.86-100.795-27.17v99.022c46.709 13.76 80.211 29.48 100.476 47.161 20.265 17.683 30.399 39.061 30.399 64.144 0 28.912-11.304 52.206-33.92 69.889-22.613 17.678-54.934 28.429-96.955 32.265v0z"
                      ></path>
                    </svg>
                    <div className={styles.icon_text}>11 Lacs</div>
                  </div>
                  <p className={styles.text}>
                    As per glassdoor, the average salary given to DevOps
                    Engineer is INR 11,00,000 per year
                  </p>
                </Col>
                <Col className={styles.glim_bx}>
                  <div className={styles.heading}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.2"
                      height="30.9"
                      viewBox="0 0 35.2 30.9"
                    >
                      <path
                        id="Path_24551"
                        data-name="Path 24551"
                        d="M109.8,172.673h-9.3v-1a3.116,3.116,0,0,0-3.1-3.1H89.2a3.116,3.116,0,0,0-3.1,3.1v1H76.8a1,1,0,0,0-1,1v22.7a3.116,3.116,0,0,0,3.1,3.1h29a3.116,3.116,0,0,0,3.1-3.1v-22.6c-.2-.6-.6-1.1-1.2-1.1m-21.7-1a1,1,0,0,1,1-1h8.2a1,1,0,0,1,1,1v1H88Zm20.2,3.1-3.2,9.6a.993.993,0,0,1-1,.7H98.3v-1a1,1,0,0,0-1-1H89.1a1,1,0,0,0-1,1v1H82.3a1.2,1.2,0,0,1-1-.7l-3.2-9.6Zm-12,12.3H90.1v-2.1h6.2Zm12.4,9.3a1,1,0,0,1-1,1h-29a1,1,0,0,1-1-1v-16.3l1.6,4.9a3,3,0,0,0,2.9,2.1H88v1a1,1,0,0,0,1,1h8.2a1,1,0,0,0,1-1v-1H104a3.128,3.128,0,0,0,2.9-2.1l1.6-4.9v16.3Z"
                        transform="translate(-75.799 -168.573)"
                        fill="#5e98ee"
                      />
                    </svg>
                    <div className={styles.icon_text}>600+ Jobs</div>
                  </div>
                  <p className={styles.text}>
                    600+ DevOps Engineer jobs are available in Bangalore-
                    LinkedIn
                  </p>
                </Col>
                <Col className={styles.glim_bx}>
                  <div className={styles.heading}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42.5"
                      height="28.5"
                      viewBox="0 0 42.5 28.5"
                    >
                      <g
                        id="Group_10758"
                        data-name="Group 10758"
                        transform="translate(14986.442 1355.143)"
                      >
                        <path
                          id="Path_24568"
                          data-name="Path 24568"
                          d="M66.058,170.857h-37.5v5h-5v23.5h37.5v-5h5Zm-7.4,10.8a4.6,4.6,0,0,1-3.3-3.3h3.3Zm-5.9-3.4a7.347,7.347,0,0,0,5.9,5.9v6.7a7.347,7.347,0,0,0-5.9,5.9h-20.8a7.347,7.347,0,0,0-5.9-5.9v-6.7a7.347,7.347,0,0,0,5.9-5.9Zm-23.3,0a4.6,4.6,0,0,1-3.3,3.3v-3.3Zm-3.4,15.2a4.6,4.6,0,0,1,3.3,3.3h-3.3Zm29.2,3.3a4.6,4.6,0,0,1,3.3-3.3v3.3Zm8.3-5h-2.5v-16h-30v-2.5h32.5Z"
                          transform="translate(-15010 -1526)"
                          fill="#5e98ee"
                        />
                        <path
                          id="Path_24569"
                          data-name="Path 24569"
                          d="M42.358,192.857a5.3,5.3,0,1,0-5.3-5.3,5.335,5.335,0,0,0,5.3,5.3m0-8.2a2.9,2.9,0,1,1-2.9,2.9,2.9,2.9,0,0,1,2.9-2.9"
                          transform="translate(-15010 -1526)"
                          fill="#5e98ee"
                        />
                        <rect
                          id="Rectangle_3453"
                          data-name="Rectangle 3453"
                          width="4.1"
                          height="2.5"
                          transform="translate(-14959.342 -1339.743)"
                          fill="#5e98ee"
                        />
                        <rect
                          id="Rectangle_3454"
                          data-name="Rectangle 3454"
                          width="4.1"
                          height="2.5"
                          transform="translate(-14980.042 -1339.743)"
                          fill="#5e98ee"
                        />
                      </g>
                    </svg>

                    <div className={styles.icon_text}>1.4 Billion </div>
                  </div>
                  <p className={styles.text}>
                    top Tech Giants Investments by companies like Amazon,
                    Google, Microsoft etc.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className={styles.list_item_info_course}>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.319"
                height="35.4"
                viewBox="0 0 35.319 35.4"
              >
                <path
                  id="Path_24547"
                  data-name="Path 24547"
                  d="M84.342,250.9a1.058,1.058,0,0,0-.84-.438H80.7v-1.7a1.055,1.055,0,0,0-1-1.1H76.9a1.076,1.076,0,0,0-1.1,1.1v1.7H58.1v-1.7a1.076,1.076,0,0,0-1.1-1.1H54.2a1.076,1.076,0,0,0-1.1,1.1v1.7H50.3a1.077,1.077,0,0,0-1.1,1.1v30.4a1.076,1.076,0,0,0,1.1,1.1H83.4a1.076,1.076,0,0,0,1.1-1.1V251.63a.912.912,0,0,0-.16-.727M82.5,280.965H76.3v-5.6h6.2Zm-16.5-.1H59.8v-5.6H66Zm0-7.7H59.8v-5.6H66Zm8.2-7.8H68v-5.6h6.2Zm-8.2,0H59.8v-5.6H66Zm2.1,9.9h6.2v5.6H68.1Zm0-7.7h6.2v5.6H68.1Zm8.2,0h6.2v5.6H76.3Zm0-7.8h6.2v5.6H76.3Zm1.611-6.5.077-3.4H78.6v3.4Zm4.889,4.4h-31v-5.1h1.5v1.7a1.076,1.076,0,0,0,1.1,1.1h2.8a1.076,1.076,0,0,0,1.1-1.1v-1.7H76v1.7a1.076,1.076,0,0,0,1.1,1.1h2.8a1.076,1.076,0,0,0,1.1-1.1v-1.7h1.8Zm-27.4-7.8h.7v3.4h-.7Zm-3.9,9.9h6.2v5.6H51.5Zm0,7.8h6.2v5.6H51.5Zm0,7.7h6.2v5.6H51.5Z"
                  transform="translate(-49.202 -247.665)"
                  fill="#5e98ee"
                />
              </svg>
              <span>9 weeks</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43.399"
                height="31.1"
                viewBox="0 0 43.399 31.1"
              >
                <g
                  id="Group_10746"
                  data-name="Group 10746"
                  transform="translate(14910.495 1274.667)"
                >
                  <path
                    id="Path_24548"
                    data-name="Path 24548"
                    d="M139.005,251.333H103.4a3.858,3.858,0,0,0-3.9,3.9v23.3a3.859,3.859,0,0,0,3.9,3.9h35.6a3.858,3.858,0,0,0,3.9-3.9v-23.3a3.857,3.857,0,0,0-3.9-3.9m1.5,3.9v23.3a1.624,1.624,0,0,1-1.6,1.6h-35.6a1.623,1.623,0,0,1-1.6-1.6v-23.3a1.623,1.623,0,0,1,1.6-1.6h35.6a1.623,1.623,0,0,1,1.6,1.6"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                  <path
                    id="Path_24549"
                    data-name="Path 24549"
                    d="M112.9,277.333h-.7a1.168,1.168,0,0,0-1,.569,1.168,1.168,0,0,0-1-.569h-6.9a1.2,1.2,0,1,0,0,2.4h6.9a1.17,1.17,0,0,0,1-.568,1.17,1.17,0,0,0,1,.568h.7a1.2,1.2,0,1,0,0-2.4"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                  <path
                    id="Path_24550"
                    data-name="Path 24550"
                    d="M127.177,265.854l-9.5-5.438a1.076,1.076,0,0,0-.872-.148,1.174,1.174,0,0,0-.717.576.864.864,0,0,0-.188.588v11a1.187,1.187,0,0,0,1.2,1.2.867.867,0,0,0,.6-.192l9.583-5.492a1.316,1.316,0,0,0,.47-1.54.967.967,0,0,0-.575-.554m-2.978,1.078-5.995,3.437v-6.874Z"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                </g>
              </svg>
              <span>18 live classes</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34.404"
                height="38.4"
                viewBox="0 0 34.404 38.4"
              >
                <path
                  id="Path_24552"
                  data-name="Path 24552"
                  d="M16.1,282.024a1.538,1.538,0,0,1-1.5,1.5H6a6.018,6.018,0,0,1-6-6v-26.4a6.018,6.018,0,0,1,6-6H24.4a6.018,6.018,0,0,1,6,6v15.9a1.5,1.5,0,0,1-3,0v-15.9a2.946,2.946,0,0,0-3-3H6a2.946,2.946,0,0,0-3,3v26.4a2.946,2.946,0,0,0,3,3h8.6a1.473,1.473,0,0,1,1.5,1.5m17.6-12.5a1.552,1.552,0,0,0-2.1.3l-7.4,10.3a.824.824,0,0,1-1.2.1l-4.8-4.6a1.485,1.485,0,0,0-2.1,2.1l4.8,4.6a3.864,3.864,0,0,0,2.7,1.1h.3a4.209,4.209,0,0,0,2.8-1.4l.1-.1,7.4-10.4a1.5,1.5,0,0,0-.5-2m-10.8-15.4H7.4a1.5,1.5,0,0,0,0,3H22.9a1.5,1.5,0,0,0,0-3m1.5,7.5a1.538,1.538,0,0,0-1.5-1.5H7.4a1.5,1.5,0,0,0,0,3H22.9a1.538,1.538,0,0,0,1.5-1.5m-17,4.5a1.5,1.5,0,0,0,0,3h9.4a1.5,1.5,0,0,0,0-3Z"
                  transform="translate(0 -245.124)"
                  fill="#5e98ee"
                />
              </svg>
              <span>8 tests</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.601"
                height="41.424"
                viewBox="0 0 31.601 41.424"
              >
                <g
                  id="Group_10747"
                  data-name="Group 10747"
                  transform="translate(14849.149 1277.792)"
                >
                  <path
                    id="Path_24556"
                    data-name="Path 24556"
                    d="M192.25,250.632h-12.3a3.6,3.6,0,0,0-4.6-2.2,3.684,3.684,0,0,0-2.2,2.2h-12.3v39h31.6v-39Zm-21.8,2.4h4.9v-1.2a1.2,1.2,0,1,1,2.4,0v1.2h4.9v2.4h-12.1v-2.4Zm19.4,34.2h-26.7v-34.1h4.9v4.9h17v-4.9h4.9v34.1Z"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                  <path
                    id="Path_24557"
                    data-name="Path 24557"
                    d="M182.75,261.232l-5.7,5.7-9.5,9.5-2.6,7.7,7.7-2.6,15.2-15.2Zm-11.3,18.2-2.6.9.9-2.6,9.1-9.1,1.7,1.7Zm9.4-12.2-.3-.3,2.2-2.2,1.7,1.7-2.2,2.2Z"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                </g>
              </svg>
              <span>12 assignments</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36.4"
                height="36.4"
                viewBox="0 0 36.4 36.4"
              >
                <g
                  id="Group_10748"
                  data-name="Group 10748"
                  transform="translate(15004.164 1228.35)"
                >
                  <path
                    id="Path_24558"
                    data-name="Path 24558"
                    d="M35.836,326.95v4.9h-4.9Zm-6.4-1.5h4.9l-4.9,4.9Zm-21.4-17.2h2.1v19.3h-2.1Zm29.9,0h2.1v19.3h-2.1Zm-29.9-4.2h2.1v2.1h-2.1Zm4.2-4.3h23.6v23.6h-8.5v8.5h-15.1Zm-2.1-2.1v4.3h-4.3v27.8h4.3v4.3h27.8v-4.3h4.3v-23.6h-4.3v-8.5Z"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                  <rect
                    id="Rectangle_3448"
                    data-name="Rectangle 3448"
                    width="14"
                    height="2"
                    transform="translate(-14993.164 -1215.35)"
                    fill="#5e98ee"
                  />
                  <rect
                    id="Rectangle_3449"
                    data-name="Rectangle 3449"
                    width="14"
                    height="2"
                    transform="translate(-14993.164 -1211.35)"
                    fill="#5e98ee"
                  />
                  <rect
                    id="Rectangle_3450"
                    data-name="Rectangle 3450"
                    width="14"
                    height="3"
                    transform="translate(-14993.164 -1220.35)"
                    fill="#5e98ee"
                  />
                </g>
              </svg>
              <span>2 Capstone Project</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.508"
                height="42.399"
                viewBox="0 0 42.508 42.399"
              >
                <g
                  id="Group_10749"
                  data-name="Group 10749"
                  transform="translate(14803.626 1278.488)"
                >
                  <path
                    id="Path_24553"
                    data-name="Path 24553"
                    d="M231.876,264.5l-5.837,5.554-2.661-2.749a1.448,1.448,0,0,0-1.1-.407,1.1,1.1,0,0,0-.812.408,1.438,1.438,0,0,0-.407,1.093,1.1,1.1,0,0,0,.4.809l3.6,3.7a1.354,1.354,0,0,0,.956.375,1.33,1.33,0,0,0,.943-.368l6.808-6.508a1.44,1.44,0,0,0,.407-1.094,1.106,1.106,0,0,0-.407-.813,1.461,1.461,0,0,0-1.9-.005"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                  <path
                    id="Path_24554"
                    data-name="Path 24554"
                    d="M227.524,255.363a13.365,13.365,0,1,0,9.505,3.935,13.416,13.416,0,0,0-9.505-3.935m10.7,13.4a10.7,10.7,0,1,1-10.7-10.7,10.712,10.712,0,0,1,10.7,10.7"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                  <path
                    id="Path_24555"
                    data-name="Path 24555"
                    d="M248.639,267.982l-2.806-4.158.291-4.961a1.365,1.365,0,0,0-.776-1.247l-4.451-2.225-2.256-4.506a1.516,1.516,0,0,0-1.244-.722h0l-4.936.291-4.157-2.707a1.246,1.246,0,0,0-1.485.019l-4.127,2.688-4.965-.291a1.367,1.367,0,0,0-1.248.776l-2.226,4.452-4.5,2.255a1.515,1.515,0,0,0-.721,1.247l.29,4.936-2.707,4.155a1.247,1.247,0,0,0,.02,1.487l2.687,4.127-.291,4.966a1.367,1.367,0,0,0,.776,1.247l4.451,2.225,2.256,4.5a1.511,1.511,0,0,0,1.244.722h0l4.936-.291,4.157,2.707a1.416,1.416,0,0,0,1.55,0l4.162-2.711,4.966.291a1.365,1.365,0,0,0,1.247-.776L241,282.035l4.505-2.256a1.51,1.51,0,0,0,.722-1.245l-.29-4.936,2.707-4.157a1.211,1.211,0,0,0,0-1.459m-5.509,5.394.275,4.392-4.006,2.048a1.28,1.28,0,0,0-.62.62l-2.05,4.007-4.5-.28a1.092,1.092,0,0,0-.78.185l-3.721,2.511-3.648-2.452a1.087,1.087,0,0,0-.822-.244c-.023,0-.046,0-.068,0l-4.769.373-2.046-4a1.288,1.288,0,0,0-.619-.619l-4.008-2.05.281-4.5a1.088,1.088,0,0,0-.186-.78l-2.511-3.72,2.511-3.72.077-.138a.882.882,0,0,0,.1-.756l-.275-4.39,4-2.048a1.292,1.292,0,0,0,.622-.62l2.05-4.009,4.505.281a1.089,1.089,0,0,0,.779-.186l3.721-2.511,3.721,2.511.134.076a.881.881,0,0,0,.759.1l4.39-.274,2.049,4.005a1.278,1.278,0,0,0,.619.622l4.008,2.05-.281,4.5a1.1,1.1,0,0,0,.187.78l2.518,3.733L243.3,272.5l-.065.117a.88.88,0,0,0-.1.758"
                    transform="translate(-15010 -1526)"
                    fill="#5e98ee"
                  />
                </g>
              </svg>
              <span>Devops Certificate</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default KnowYourCourse;

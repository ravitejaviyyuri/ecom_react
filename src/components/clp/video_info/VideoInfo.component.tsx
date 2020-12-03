import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./videoinfo.module.scss";

const VideoInfo = () => {
  return (
    <section className={styles.videoinfo_section}>
      <Container>
        <Row>
          <Col>
            <div className={styles.courseinfo_section}>
              <div className={styles.title}>
                Experience World-Class Learning
              </div>
              <p>
                Bigdata Certification Training Course will enable you to prepare
                you for a career in DevOps, a fast-growing field that bridges
                the gap between software developers and operations
                professionals.
              </p>
            </div>
            <div className={styles.video_section}>
              <div className={styles.video_img_play}>
                <img
                  src={
                    "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_preview_img_776_1592303669.png"
                  }
                  alt="playimg"
                />
              </div>
              <div className={styles.user_most_like}>
                <div className={styles.first_bx}>
                  <img src="" alt="user_img" />
                  <p>
                    <span className={styles.top}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.939"
                        height="16"
                        viewBox="0 0 9.939 16"
                      >
                        <path
                          fill="#ff2e1a"
                          d="M100.706 15.917l6.171-10.627a.334.334 0 0 0-.334-.5l-4.105.558.981-5.148a.167.167 0 0 0-.3-.132l-6.068 8.01a.334.334 0 0 0 .3.534l4.526-.476L100.4 15.8a.167.167 0 0 0 .306.117z"
                          transform="translate(-96.985)"
                        />
                      </svg>
                      Jagannath John Kabir
                    </span>
                    <span className={styles.bottom}>
                      Edureka is an amazing knowledge source.
                    </span>
                  </p>
                </div>
                <div className={styles.second_bx}>
                  2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.841"
                    height="11.618"
                    viewBox="0 0 9.841 11.618"
                  >
                    <g>
                      <path
                        fill="#74819f"
                        d="M21.717 84a1.264 1.264 0 0 0-1.263-1.263h-2.29a4.012 4.012 0 0 0 .543-2.084v-.135a1.7 1.7 0 0 0-1.677-1.7h-.013a.865.865 0 0 0-.853.778c-.171 2.059-2.155 3.12-3.482 3.766v-.213a.4.4 0 0 0-.4-.4h-.4c0 8.352.036 4.083.036 7.584l.638-.6a9.572 9.572 0 0 0 4.115.7h.752c.285 0 .579-.005.887-.005h1.274a1.262 1.262 0 0 0 1.087-1.9 1.262 1.262 0 0 0 .43-1.72 1.261 1.261 0 0 0 .274-1.93 1.258 1.258 0 0 0 .342-.878zm-2.123 1.26h.844a.457.457 0 1 1 0 .914h-.844a.4.4 0 1 0 0 .806h.414a.457.457 0 0 1 0 .914h-.43a.4.4 0 1 0 0 .806.457.457 0 0 1 0 .914H18.3c-.312 0-.608 0-.895.006a9.862 9.862 0 0 1-4.721-.715v-4.656l.129-.062a11.39 11.39 0 0 0 2.485-1.5 4.394 4.394 0 0 0 1.666-3.029.06.06 0 0 1 .049-.039.9.9 0 0 1 .883.9v.135a3.478 3.478 0 0 1-.676 2.084h-.641a.4.4 0 1 0 0 .806h3.869a.457.457 0 1 1 0 .914h-.86a.4.4 0 0 0 0 .806z"
                        transform="translate(-11.876 -78.812)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.courseenr_section}>
              <p className={styles.learner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="39"
                  viewBox="0 0 39 39"
                >
                  <text
                    id="_"
                    data-name="😊"
                    transform="translate(0 30)"
                    fill="#192f60"
                    fontSize="30"
                    fontFamily="AppleColorEmoji, Apple Color Emoji"
                  >
                    <tspan x="0" y="0">
                      😊
                    </tspan>
                  </text>
                </svg>
                161K+ Satisfied Learners
              </p>
              <p className={styles.money_value}>
                <span>
                  <svg
                    id="_05-growth"
                    data-name=" 05-growth"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38.449"
                    height="38.126"
                    viewBox="0 0 38.449 38.126"
                  >
                    <g id="Glyph" transform="translate(0)">
                      <path
                        id="Path_6473"
                        data-name="Path 6473"
                        d="M41.1,0H33.023V3.231H37.2L31.248,9.183A12.916,12.916,0,0,0,15.386,29.571q.272.212.555.409l-1.137,1.7L11.3,29.35a1.615,1.615,0,0,0-2.188.375L4.267,36.187l2.585,1.939,3.93-5.24,3.574,2.383a1.615,1.615,0,0,0,2.24-.448l2.219-3.327A12.915,12.915,0,0,0,33.533,11.468l5.952-5.952V9.693h3.231V1.615A1.615,1.615,0,0,0,41.1,0ZM28.176,16.155H22.522a.808.808,0,0,0,0,1.616h1.616a4.039,4.039,0,0,1,.808,8v1.7H21.714V25.848H18.483V22.617h5.654a.808.808,0,0,0,0-1.616H22.522a4.039,4.039,0,0,1-.808-8v-1.7h3.231v1.616h3.231Z"
                        transform="translate(-4.267)"
                      />
                    </g>
                  </svg>
                  40% - 50% Salary Hike
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.184"
                    height="30.651"
                    viewBox="0 0 34.184 30.651"
                  >
                    <g
                      id="Group_10741"
                      data-name="Group 10741"
                      transform="translate(0 0)"
                    >
                      <g
                        id="Group_8152"
                        data-name="Group 8152"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_6470"
                          data-name="Path 6470"
                          d="M308.615,335.267l2.916,2.915,2.9-2.9v.94a9.74,9.74,0,0,1-9.729,9.729h-2.028v4.123H304.7a13.868,13.868,0,0,0,13.852-13.852v-.94l2.9,2.9,2.916-2.915-7.876-7.876Z"
                          transform="translate(-290.183 -319.424)"
                        />
                        <path
                          id="Path_6472"
                          data-name="Path 6472"
                          d="M5.942,7.876l2.916,2.915,2.9-2.9v.94a9.74,9.74,0,0,1-9.729,9.729H0v4.123H2.028A13.868,13.868,0,0,0,15.879,8.833v-.94l2.9,2.9,2.916-2.915L13.818,0Z"
                          transform="translate(21.694 22.685) rotate(180)"
                        />
                      </g>
                    </g>
                  </svg>
                  30% Increase in Big Data Jobs by 2024
                </span>
              </p>
              <p className={styles.work}>Big Data professionals work at</p>
              <div className={styles.comp_img}>
                <Image
                  className={styles.company_logo}
                  src="/microsoft.svg"
                  width="100"
                  height="25"
                  loading="lazy"
                  alt="mircosoft-logo"
                />
                <Image
                  className={styles.company_logo}
                  src="/google.svg"
                  width="80"
                  height="25"
                  loading="lazy"
                  alt="google-logo"
                />
                <Image
                  className={styles.company_logo}
                  src="/facebook.svg"
                  width="100"
                  height="25"
                  loading="lazy"
                  alt="facebook-logo"
                />
                <Image
                  className={styles.company_logo}
                  src="/citi.svg"
                  width="40"
                  height="25"
                  loading="lazy"
                  alt="citi-logo"
                />
              </div>
              <Button>
                <span>
                  Next Batch: <b>12th Sept 2020</b>
                </span>
                Enroll Now
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="12px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#ffffff"
                    d="M487.304 0l-85.534 84.932 360.207 360.207h-731.859v120.471h715.595l-343.944 343.341 85.534 85.534 496.941-497.544-496.941-496.941z"
                  ></path>
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoInfo;

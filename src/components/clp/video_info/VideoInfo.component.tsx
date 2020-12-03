import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./videoinfo.module.scss";
import { SparkIcon } from "../../shared/icons/sparkicon";
import { ThumbsupIcon } from "../../shared/icons/thumbsupicon";
import { SmileyFaceIcon } from "../../shared/icons/smileyfaceicon";
import { SalaryHikeIcon } from "../../shared/icons/salaryhikeicon";
import { SwicthIcon } from "../../shared/icons/switchicon";
import { RightArrowIcon } from "../../shared/icons/rightarrowicon";

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
                      <SparkIcon color="#ff2e1a" />
                      Jagannath John Kabir
                    </span>
                    <span className={styles.bottom}>
                      Edureka is an amazing knowledge source.
                    </span>
                  </p>
                </div>
                <div className={styles.second_bx}>
                  2
                  <ThumbsupIcon color="#74819f" />
                </div>
              </div>
            </div>
            <div className={styles.courseenr_section}>
              <p className={styles.learner}>
                <SmileyFaceIcon />
                161K+ Satisfied Learners
              </p>
              <p className={styles.money_value}>
                <span>
                  <SalaryHikeIcon />
                  40% - 50% Salary Hike
                </span>
                <span>
                  <SwicthIcon />
                  30% Increase in Big Data Jobs by 2024
                </span>
              </p>
              <p className={styles.work}>Big Data professionals work at</p>
              <div className={styles.comp_img}>
                <Image
                  className={styles.company_logo}
                  src="/microsoft.svg"
                  width="98"
                  height="21"
                  loading="lazy"
                  layout="fixed"
                  alt="mircosoft-logo"
                />
                <Image
                  className={styles.company_logo}
                  src="/google.svg"
                  width="62"
                  height="20"
                  loading="lazy"
                  layout="fixed"
                  alt="google-logo"
                />
                <Image
                  className={styles.company_logo}
                  src="/facebook.svg"
                  width="87"
                  height="17"
                  layout="fixed"
                  loading="lazy"
                  alt="facebook-logo"
                />
                <Image
                  className={styles.company_logo}
                  src="/citi.svg"
                  width="41"
                  height="24"
                  loading="lazy"
                  layout="fixed"
                  alt="citi-logo"
                />
              </div>
              <Button>
                <span>
                  Next Batch: <b>12th Sept 2020</b>
                </span>
                Enroll Now
                <RightArrowIcon color="#ffffff" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoInfo;

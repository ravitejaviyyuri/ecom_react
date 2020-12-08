import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ratings.module.scss";
type Props = {
  ratings: any
}
const Ratings = ({ratings}: Props) => {
  
  return (
    <Row className={styles.rating_row}>
      <Col xs={12} sm={12} md={12} lg={3} className={styles.col}>
        <div className={styles.rating_section}>
          <Image
            width={38}
            height={33}
            loading="lazy"
            src="/google_small.svg"
            alt="Google Logo"
          />
          <div className={styles.rating_col}>
  <span className={styles.current_rating}>{ratings.google.plaform_rating}</span>
            <span className={styles.max_rating}>/5</span>
          </div>
        </div>
        <div className={styles.total_reviews}>{ratings.google.palform_desc}</div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} className={styles.col}>
        <div className={styles.rating_section}>
          <Image
            width={37}
            height={26}
            loading="lazy"
            src="/youtube_small.svg"
            alt="YouTube Logo"
          />
          <div className={styles.rating_col}>
            <span className={styles.current_rating}>{ratings.youtube.plaform_rating}</span>
          </div>
        </div>
        <div className={styles.total_reviews}>{ratings.youtube.palform_desc}</div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} className={styles.col}>
        <div className={styles.rating_section}>
          <Image
            width={36}
            height={36}
            loading="lazy"
            src="/trustpilot_small.svg"
            alt="YouTube Logo"
          />
          <div className={styles.rating_col}>
            <span className={styles.current_rating}>{ratings.trustpilot.plaform_rating}</span>
            <span className={styles.max_rating}>/10</span>
          </div>
        </div>
        <div className={styles.total_reviews}>{ratings.trustpilot.palform_desc}</div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} className={styles.col}>
        <div className={styles.rating_section}>
          <Image
            width={38}
            height={38}
            loading="lazy"
            src="/mouthshut_small.svg"
            alt="YouTube Logo"
          />
          <div className={styles.rating_col}>
            <span className={styles.current_rating}>{ratings.mouthshut.plaform_rating}</span>
            <span className={styles.max_rating}>/5</span>
          </div>
        </div>
        <div className={styles.total_reviews}>{ratings.mouthshut.palform_desc}</div>
      </Col>
    </Row>
  );
};

export default Ratings;

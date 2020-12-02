import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ratings.module.scss";

const Ratings = () => {
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
            <span className={styles.current_rating}>4.4</span>
            <span className={styles.max_rating}>/5</span>
          </div>
        </div>
        <div className={styles.total_reviews}>1,476 Google Reviews</div>
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
            <span className={styles.current_rating}>2.11m</span>
          </div>
        </div>
        <div className={styles.total_reviews}>Youtube subscribers</div>
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
            <span className={styles.current_rating}>9.2</span>
            <span className={styles.max_rating}>/10</span>
          </div>
        </div>
        <div className={styles.total_reviews}>1300 Trustpilot Reviews</div>
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
            <span className={styles.current_rating}>4.2</span>
            <span className={styles.max_rating}>/5</span>
          </div>
        </div>
        <div className={styles.total_reviews}>3000 Mouthshut Reviews</div>
      </Col>
    </Row>
  );
};

export default Ratings;

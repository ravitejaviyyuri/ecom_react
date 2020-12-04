import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./title.module.scss";
import { PhoneIcon } from "../../shared/icons/phoneicon";
import { HeartIcon } from "../../shared/icons/hearticon";
import { ShareIcon } from "../../shared/icons/shareicon";

const CourseTitle = () => {
  return (
    <section className={styles.title_section}>
      <Container>
        <div className={styles.mix_section}>
          <div className={styles.heading}>
            <h1>Big Data Hadoop Certification Training</h1>
            <span>LIVE CLASSES</span>
          </div>
          <div className={styles.contact_share}>
            <div className={styles.conatct_bx}>
              <a href="callto:+919988776655">
                <PhoneIcon />
                +91 9988776655
              </a>
            </div>
            <div className={styles.wishlist_bx}>
              <HeartIcon />
            </div>
            <div className={styles.share_bx}>
              <ShareIcon />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseTitle;

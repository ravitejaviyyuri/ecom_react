import React, { useState, useEffect } from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styles from "./watchvideopopup.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import { YoutubeRedIcon } from "../../shared/icons/youtuberedicon";
import { VideoIcon } from "../../shared/icons/videoicon";
import SignupForm from "../../shared/LoginSignup/SignupForm.component";

const WatchVideoPopup = (props: any) => {
  const [isMob, setMob] = useState(false);
  const [isLeadForm, setLeadForm] = useState(false);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
  }, []);

  return (
    <Modal
      centered
      size="lg"
      contentClassName={styles.modal_content}
      dialogClassName={styles.modal_dialog}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Body className={styles.modal_body}>
        {isMob && (
          <div className={styles.close_btn} onClick={props.handleClose}>
            <CrossIcon color="#192f60" />
          </div>
        )}
        <Row className={styles.row}>
          <Col xs={12} sm={12} md={8} className={styles.left_section}>
            {isMob && <h3>DevOps Certification Training</h3>}
            <Image
              src="/clp-video-thumbnail.png"
              alt=""
              width={665}
              height={409}
              loading="lazy"
            />
            <span className={styles.youtube_logo}>
              <YoutubeRedIcon />
            </span>
          </Col>
          {isLeadForm ? (
            <Col xs={12} sm={12} md={4} className={styles.lead_form}>
              <h3>Let’s Get Started</h3>
              <SignupForm />
            </Col>
          ) : (
            <Col xs={12} sm={12} md={4} className={styles.right_section}>
              <div className={styles.current_playing}>
                <span> Not sure of which course to take?</span>
                {!isMob && <VideoIcon color="#0052cc" />}
              </div>
              <div className={styles.up_next_col}>
                {!isMob && <p>Upnext</p>}
                <div className={styles.playlist}>
                  <div className={styles.next_playing}>
                    <span> Not sure of which course to take?</span>
                    <VideoIcon color="#8e8e8e" />
                  </div>
                  <div className={styles.next_playing}>
                    <span> Not sure of which course to take?</span>
                    <VideoIcon color="#8e8e8e" />
                  </div>
                  <div className={styles.next_playing}>
                    <span> Not sure of which course to take?</span>
                    <VideoIcon color="#8e8e8e" />
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default WatchVideoPopup;

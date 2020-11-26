import React, { useState, useEffect } from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styles from "./watchvideopopup.module.scss";

const WatchVideoPopup = (props: any) => {
  const [isMob, setMob] = useState(false);

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
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1023"
              height="1024"
              viewBox="0 0 1023 1024"
            >
              <title></title>
              <g id="icomoon-ignore"></g>
              <path
                fill="#192f60"
                d="M1023.29 923.162l-411.162-411.162 411.162-411.162-100.128-100.838-411.162 411.162-411.162-411.162-100.838 100.128 411.162 411.872-411.162 411.162 100.128 100.838 411.872-411.872 411.162 411.162 100.128-100.128z"
              ></path>
            </svg>
          </div>
        )}
        <Row className={styles.row}>
          <Col xs={12} sm={12} md={8} className={styles.left_section}>
            {/* <Image
              src="/clp-video-thumbnail.png"
              alt="thumbnail"
              width="1000%"
              height="100%"
              layout="responsive"
              loading="lazy"
            /> */}
            {isMob && <h3>DevOps Certification Training</h3>}
            <img src="/clp-video-thumbnail.png" alt="" width="100%" />
            <span className={styles.youtube_logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="prefix__Layer_1"
                x={0}
                y={0}
                viewBox="0 0 71.412 50"
                xmlSpace="preserve"
                width={71.412}
                height={50}
              >
                <style type="text/css" id="style3" />
                <g id="prefix__g5" transform="scale(.58824)">
                  <path
                    d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"
                    id="prefix__path7"
                    fill="red"
                  />
                  <path
                    id="prefix__polygon9"
                    fill="#fff"
                    d="M80.2 42.5L48.6 24.3v36.4z"
                  />
                </g>
              </svg>
            </span>
          </Col>
          <Col xs={12} sm={12} md={4} className={styles.right_section}>
            <div className={styles.current_playing}>
              <span> Not sure of which course to take?</span>
              {!isMob && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path
                    d="M511.6 18.7c-275.7 0-494.8 219.1-494.8 494.8s219.1 494.8 494.8 494.8 494.8-219.1 494.8-494.8c7-275.7-219.1-494.8-494.8-494.8zM377.3 718.4v-410l353.4 205-353.4 205z"
                    fill="#0052cc"
                  />
                </svg>
              )}
            </div>
            <div className={styles.up_next_col}>
              {!isMob && <p>Upnext</p>}
              <div className={styles.playlist}>
                <div className={styles.next_playing}>
                  <span> Not sure of which course to take?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M511.6 18.7c-275.7 0-494.8 219.1-494.8 494.8s219.1 494.8 494.8 494.8 494.8-219.1 494.8-494.8c7-275.7-219.1-494.8-494.8-494.8zM377.3 718.4v-410l353.4 205-353.4 205z"
                      fill="#8e8e8e"
                    />
                  </svg>
                </div>
                <div className={styles.next_playing}>
                  <span> Not sure of which course to take?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M511.6 18.7c-275.7 0-494.8 219.1-494.8 494.8s219.1 494.8 494.8 494.8 494.8-219.1 494.8-494.8c7-275.7-219.1-494.8-494.8-494.8zM377.3 718.4v-410l353.4 205-353.4 205z"
                      fill="#8e8e8e"
                    />
                  </svg>
                </div>
                <div className={styles.next_playing}>
                  <span> Not sure of which course to take?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M511.6 18.7c-275.7 0-494.8 219.1-494.8 494.8s219.1 494.8 494.8 494.8 494.8-219.1 494.8-494.8c7-275.7-219.1-494.8-494.8-494.8zM377.3 718.4v-410l353.4 205-353.4 205z"
                      fill="#8e8e8e"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default WatchVideoPopup;

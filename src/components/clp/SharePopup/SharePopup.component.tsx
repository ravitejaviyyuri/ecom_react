import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./sharepopup.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import { CopyIcon } from "../../shared/icons/copyicon";
import { LinkIcon } from "../../shared/icons/linkicon";
import { TwitterIcon } from "../../shared/icons/twittericon";

const LoginSignup = (props: any) => {
  return (
    <Modal
      centered
      contentClassName={styles.modal_content}
      dialogClassName={styles.modal_dialog}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Body className={styles.modal_body}>
        <div className={styles.close_btn} onClick={props.handleClose}>
          <CrossIcon color="#000000" />
        </div>
        <div className={styles.heading}>Share with the world</div>
        <div className={styles.page_link_div}>
          <div className={styles.label}>Page URL</div>
          <div className={styles.link_grp}>
            <div className={styles.link_div}>
              <LinkIcon color="#9ba5ba" />
              <div>http://bit.ly.cffdgdggfg</div>
            </div>
            <div className={styles.copy_icon}>
              <CopyIcon color="#0052cc" />
            </div>
          </div>
        </div>
        <div className={styles.page_link_div}>
          <div className={styles.label}>Social Media</div>
          <div className={styles.link_grp}>
            <div className={styles.media_icon}>
              <TwitterIcon color="#bdc2cf" />
            </div>
            <div className={styles.media_icon}>
              <TwitterIcon color="#bdc2cf" />
            </div>
            <div className={styles.media_icon}>
              <TwitterIcon color="#bdc2cf" />
            </div>
            <div className={styles.media_icon}>
              <TwitterIcon color="#bdc2cf" />
            </div>
          </div>
        </div>
        <Button className={styles.share_btn}>SHARE NOW</Button>
      </Modal.Body>
    </Modal>
  );
};

export default LoginSignup;

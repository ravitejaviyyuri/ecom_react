import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./loginsignup.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import LoginForm from "./LoginForm.component";
import SignupForm from "./SignupForm.component";

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
          <CrossIcon color="#192f60" />
        </div>
        <div className={styles.heading}>Let’s Get Started</div>
        {props.type === "login" ? (
          <LoginForm setLogin={props.handleType} handleClose={props.handleClose} />
        ) : (
          <SignupForm setLogin={props.handleType} handleClose={props.handleClose} countries={props.countries}/>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginSignup;

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import styles from "./startlearning.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";
import SuccessMessage from "../../clp/SuccessMessage/SuccessMessage.component";

const StartLearningPopup = (props: any) => {
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
        {/* <SuccessMessage /> */}
        <div className={styles.heading}>Enter Details</div>
        <Form className={styles.form}>
          <Form.Group
            controlId="startLearningPhoneNumber"
            className="position-relative"
          >
            <Form.Label className={styles.label}>Phone Number</Form.Label>
            <CountryCodeSelect className={styles.code_select} options=""/>
            <Form.Control
              className={`${styles.input} ${styles.phone_input}`}
              type="tel"
              placeholder="Enter Phone Number*"
            />
          </Form.Group>
          <Form.Group className="mb-0" controlId="startLearningEmail">
            <Form.Label className={styles.label}>Email Id</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <span className={styles.batch_detail}>
            View batch details in the next page
          </span>
          <Button className={styles.submit} variant="primary">
            START LEARNING
          </Button>
        </Form>
        <div>
          <div className={styles.info}>
            <TickCircleIcon color="#75d505" />
            Lifetime access to doubt resolution
          </div>
          <div className={styles.info}>
            <TickCircleIcon color="#75d505" />
            Lifetime access to the LMS
          </div>
          <div className={styles.info}>
            <TickCircleIcon color="#75d505" />
            Lifetime course Updation
          </div>
          <div className={styles.info}>
            <TickCircleIcon color="#75d505" />
            Lifetime access to class recordings
          </div>
          <div className={styles.info}>
            <TickCircleIcon color="#75d505" />
            Batch Change Flexibility
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StartLearningPopup;

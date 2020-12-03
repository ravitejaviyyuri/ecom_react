import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import styles from "./downloadcurriculum.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const DownloadCurriculum = (props: any) => {
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
        <div className={styles.heading}>Download Curriculum</div>
        <Form className={styles.form}>
          <Form.Group
            controlId="downloadFullSyllabus"
            className="position-relative"
          >
            <Form.Label className={styles.label}>Phone Number</Form.Label>
            <CountryCodeSelect className={styles.code_select} />
            <Form.Control
              className={`${styles.input} ${styles.phone_input}`}
              type="tel"
              placeholder="Enter Phone Number*"
            />
          </Form.Group>
          <Form.Group controlId="duqFormEmail">
            <Form.Label className={styles.label}>Email Id</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder="eg@saga.gmail.com"
            />
          </Form.Group>
          <Button className={styles.submit} variant="primary">
            DOWNLOAD FULL SYLLABUS
          </Button>
        </Form>
        <div className={styles.info}>
          <TickCircleIcon color="#75d505" />
          Also get detailed information on Career Prospects & Industry Trends
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadCurriculum;

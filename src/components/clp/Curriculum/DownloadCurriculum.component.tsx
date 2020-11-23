import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import styles from "./downloadcurriculum.module.scss";

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
              fill="#000000"
              d="M1023.29 923.162l-411.162-411.162 411.162-411.162-100.128-100.838-411.162 411.162-411.162-411.162-100.838 100.128 411.162 411.872-411.162 411.162 100.128 100.838 411.872-411.872 411.162 411.162 100.128-100.128z"
            ></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <path
              id="Path_24541"
              data-name="Path 24541"
              d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
              fill="#75d505"
            />
          </svg>
          Also get detailed information on Career Prospects & Industry Trends
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadCurriculum;

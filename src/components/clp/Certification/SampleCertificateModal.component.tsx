import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import Button from "react-bootstrap/Button";
import styles from "./samplecertificatemodal.module.scss";

const SampleCertitficateModal = (props: any) => {
  const [isSuccess, setSuccess] = useState(false);
  const handleSuccess = () => {
    setSuccess(true)
  }

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
        {isSuccess ? (
          <div>
            <div className={styles.success_tick}>
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
                  fill="#58e044"
                />
              </svg>
              <h4>Certificate sent to your inbox</h4>
            </div>
            <div className={styles.message}>
              <p>We have mailed you the sample certificate </p>
              <h4>
                Meanwhile, do you want to discuss this course with our experts?
              </h4>
            </div>
            <div className={styles.button_div}>
              <Button className={styles.submit} variant="primary">
                YES, I WANT TO DISCUSS
              </Button>
              <Button className={styles.skip} variant="primary">
                SKIP FOR NOW
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.heading}>Sample Certificate</div>
            <Form className={styles.form}>
              <Form.Group controlId="sampleCertificateName">
                <Form.Label className={styles.label}>Name</Form.Label>
                <Form.Control
                  className={styles.input}
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group controlId="sampleCertificateEmail">
                <Form.Label className={styles.label}>Email Id</Form.Label>
                <Form.Control
                  className={styles.input}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group
                controlId="sampleCertificatePhone"
                className="position-relative"
              >
                <Form.Label className={styles.label}>Phone Number</Form.Label>
                <CountryCodeSelect className={styles.code_select} />
                <Form.Control
                  className={`${styles.input} ${styles.phone_input}`}
                  type="tel"
                  placeholder="Enter Phone Number"
                />
              </Form.Group>
              <Button className={styles.submit} variant="primary" onClick={handleSuccess}>
                PREVIEW CERTIFICATE
              </Button>
            </Form>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SampleCertitficateModal;

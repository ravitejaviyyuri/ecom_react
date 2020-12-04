import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import Button from "react-bootstrap/Button";
import styles from "./samplecertificatemodal.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const SampleCertitficateModal = (props: any) => {
  const [isSuccess, setSuccess] = useState(false);
  const handleSuccess = () => {
    setSuccess(true);
  };

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
          <CrossIcon color="#192f60" />
        </div>
        {isSuccess ? (
          <div>
            <div className={styles.success_tick}>
              <TickCircleIcon color="#58e044" />
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
              <Button
                className={styles.submit}
                variant="primary"
                onClick={handleSuccess}
              >
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

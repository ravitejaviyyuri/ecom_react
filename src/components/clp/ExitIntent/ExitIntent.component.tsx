import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import Button from "react-bootstrap/Button";
import styles from "./exitintent.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const ExitIntentPopup = (props: any) => {
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
        <div>
          {isSuccess ? (
            <div className={styles.success_msg_section}>
              <div className={styles.success_tick}>
                <TickCircleIcon color="#58e044" />
                <h4>Awesome</h4>
              </div>
              <div className={styles.message}>
                <h4>
                  We have received your contact details. One of Edureka’s Career
                  Advisor will call you shortly.
                </h4>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.heading}>
                Get a free counselling to decide your next career step.
              </div>
              <Form className={styles.form}>
                <Form.Group controlId="exitIntentEmail">
                  <Form.Label className={styles.label}>Email Id</Form.Label>
                  <Form.Control
                    className={styles.input}
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group
                  controlId="exitIntentPhone"
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
                  GET A CALL
                </Button>
              </Form>
              <span className={styles.info}>
                Our career Advisor will give you a call shortly
              </span>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ExitIntentPopup;

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import styles from "./helpchoosebatch.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";

const HelpChooseBatch = (props: any) => {
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
        <div className={styles.heading}>
          Let us help you choose the right batch
        </div>
        <Form className={styles.form}>
          <Form.Group controlId="chooseBatchDate" className="position-relative">
            <Form.Label className={styles.label}>
              Preferred batch start date
            </Form.Label>
            <Form.Control
              className={styles.input}
              type="date"
              placeholder="Select a Date"
            />
          </Form.Group>
          <Form.Group
            controlId="chooseBatchPhoneNumber"
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
          <Form.Group controlId="chooseBatchEmail">
            <Form.Label className={styles.label}>Email Id</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder="eg@saga.gmail.com"
            />
          </Form.Group>
          <Button className={styles.submit} variant="primary">
            SUBMIT
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HelpChooseBatch;

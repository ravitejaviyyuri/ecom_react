import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../CountryCodeSelect.component";
import styles from "./bannerpopup.module.scss";
import { CrossIcon } from "../../icons/crossicon";
import  Countdown  from "../countdowntimer/CountdownTimer.component";

const BannerPopup = (props: any) => {
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
          Avail Offer
        </div>
        <div className={styles.offerinfo}>
          <span>Double Delight Offer</span> <span>- Flat 10% Off + 20% Cashback </span> 
          <span className={styles.endsin}>
          <span>Offer ending in</span>  <Countdown displayviewdot="none"  colorchange="#192f60" fontchange="22px" fontchangetext="22px" fontchangedot=""/>
          </span>
        </div>
        <Form className={styles.form}>
        <Form.Group controlId="chooseofferEmail">
            <Form.Label className={styles.label}>Email Id</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder="eg@saga.gmail.com"
            />
          </Form.Group>
          
          <Form.Group
            controlId="chooseofferPhoneNumber"
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
          
          <Button className={styles.submit} variant="primary">
            AVAIL OFFER NOW
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BannerPopup;

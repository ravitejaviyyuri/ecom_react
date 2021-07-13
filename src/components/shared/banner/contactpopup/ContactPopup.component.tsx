import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../CountryCodeSelect.component";
import styles from "./contactpopup.module.scss";
import { CrossIcon } from "../../icons/crossicon";
import  Countdown  from "../countdowntimer/CountdownTimer.component";

const ContactPopup = (props: any) => {
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
        <img src="/cal_ico_contact_pop.png" alt="flag" />  Call Edureka 24x7
        </div>
        <div className={styles.subtitle}>
        Edureka course counsellors and learner support agents are available 24x7 to help with your learning needs.
        </div>

        <div className={styles.contact_list_view_bx}>
          <div className={styles.title}>For New Course Enquiry </div>
          <div className={styles.numbers}> <span className={styles.first}><img className={styles.lazyImages}  alt="img" src="/inr.png" />India: </span> <span className={styles.second}><i className="icon-ac-phone"></i> <a href="tel:+91 89517 55408" className={styles.countryChangeNumber} >+91 89517 55408</a></span> </div>
          <div className={styles.numbers}> <span className={styles.first}><img className={styles.lazyImages}  alt="img" src="/usd.png" />USA &amp; Canada: </span> <span className={styles.second}><i className="icon-ac-phone"></i> <a href="tel:+1415 874 0153" className={styles.countryChangeNumber} >+1415 874 0153<span>(Toll Free)</span></a></span></div>
          <div className={styles.numbers}> <span className={styles.first}><img className={styles.lazyImages}  alt="img" src="/rest_word_small.png" />Rest of world:</span> <span className={styles.second}><i className="icon-ac-phone"></i> <a href="tel:+1415 874 0153" className={styles.countryChangeNumber} >+1415 874 0153</a></span> </div>
        </div>

        <div className={styles.contact_list_view_bx}>
          <div className={styles.title}>For Support ( Already enrolled learners only)</div>
          <div className={styles.numbers}> <span className={styles.first}><img className={styles.lazyImages}  alt="img" src="/inr.png" />India: </span> <span className={styles.second}><i className="icon-ac-phone"></i> <a href="tel:+91 89517 55400" className={styles.countryChangeNumber} >+91 89517 55400</a></span> </div>
          <div className={styles.numbers}> <span className={styles.first}><img className={styles.lazyImages}  alt="img" src="/usd.png" />USA &amp; Canada: </span> <span className={styles.second}><i className="icon-ac-phone"></i> <a href="tel:+1 877 959 4010" className={styles.countryChangeNumber} >+1 877 959 4010<span>(Toll Free)</span></a></span></div>
          <div className={styles.numbers}> <span className={styles.first}><img className={styles.lazyImages}  alt="img" src="/rest_word_small.png" />Rest of world:</span> <span className={styles.second}><i className="icon-ac-phone"></i> <a href="tel:+1 877 959 4010" className={styles.countryChangeNumber} >+1 877 959 4010</a></span> </div>
        </div>
        <div className={styles.close_bottom} onClick={props.handleClose}>
          Close
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactPopup;

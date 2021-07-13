import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./certificatezoommodal.module.scss";
import { CrossIcon } from "../../shared/icons/crossicon";

const CertificateZoomModal = (props: any) => {
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
        <img
          src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1606136770/img/certibackgrounds/sample_crt.png"
          alt="Sample Certificate"
        />
      </Modal.Body>
    </Modal>
  );
};

export default CertificateZoomModal;

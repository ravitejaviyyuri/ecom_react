import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./certificatezoommodal.module.scss";

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
        <img
          src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1606136770/img/certibackgrounds/sample_crt.png"
          alt="Sample Certificate"
        />
      </Modal.Body>
    </Modal>
  );
};

export default CertificateZoomModal;

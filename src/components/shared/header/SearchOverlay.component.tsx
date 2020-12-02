import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./searchoverlay.module.scss";
import MenuLinks from './search_tabs/SearchTabs.component'

const SearchOverlay = (props: any) => {
  return (
    <Modal
      centered
      contentClassName={styles.modalsearch_content}
      dialogClassName={styles.modalsearch_dialog}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Body className={styles.modalsearch_body}>
        <div className={styles.close_btn} onClick={props.handleClose}>
          close
        </div>
        <MenuLinks />
      </Modal.Body>
    </Modal>
  );
};

export default SearchOverlay;

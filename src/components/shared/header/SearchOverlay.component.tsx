import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./searchoverlay.module.scss";
import SearchInput from "./search_tabs/SearchInput.component";
import MenuLinks from "./search_tabs/SearchTabs.component";
import { CrossIcon } from "../../shared/icons/crossicon";

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
          <CrossIcon color="#000000" />
        </div>
        <SearchInput />
        <MenuLinks />
      </Modal.Body>
    </Modal>
  );
};

export default SearchOverlay;

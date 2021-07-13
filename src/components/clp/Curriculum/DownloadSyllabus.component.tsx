import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./downloadbutton.module.scss";
import { AdobeIcon } from "../../shared/icons/adobeicon";

const DownloadSyllabus = (props: any) => {
  return (
    <Button onClick={props.onClick} className={styles.download_syllabus_btn}>
      <span>
        <AdobeIcon />
      </span>
      Download Full Syllabus
    </Button>
  );
};

export default DownloadSyllabus;

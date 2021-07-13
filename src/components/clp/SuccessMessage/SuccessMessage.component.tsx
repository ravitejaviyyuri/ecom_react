import React from "react";
import styles from "./successmessage.module.scss";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const SuccessMessage = (props: any) => {
  return (
    <div className={styles.success_msg_section}>
      <div className={styles.success_tick}>
        <TickCircleIcon color="#58e044" />
        <h4>Thanks for showing interest</h4>
      </div>
      <div className={styles.message}>
        <h4>Our Learning manager will get back to you soon!</h4>
      </div>
    </div>
  );
};

export default SuccessMessage;

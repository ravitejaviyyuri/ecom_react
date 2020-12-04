import React from "react";
import styles from "./batchtable.module.scss";
import { SparkIcon } from "../../shared/icons/sparkicon";

const BatchTable = () => {
  return (
    <section className={styles.batchtable_section}>
      <label className={`radio-inline ${styles.disabled_sold_out}`}>
        <div className={styles.sold_out}>SOLD OUT</div>
        <div className={styles.date_day}>
          <span className={styles.date}>OCT 12th </span>
          <span className={styles.week}>Weekend Batch </span>
        </div>
        <div className={styles.time_week}>
          <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
          <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
        </div>
      </label>

      <label className="radio-inline">
        <input type="radio" name="fildname" />
        <div className={styles.filling_fast}>
          <span>Filling Fast</span>
          <SparkIcon color="#ffffff" />
        </div>
        <div className={styles.date_day}>
          <span className={styles.date}>OCT 12th </span>
          <span className={styles.week}>Weekend Batch </span>
        </div>
        <div className={styles.time_week}>
          <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
          <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
        </div>
      </label>

      <label className="radio-inline">
        <input type="radio" name="fildname" />
        <div className={styles.date_day}>
          <span className={styles.date}>OCT 12th </span>
          <span className={styles.week}>Weekend Batch </span>
        </div>
        <div className={styles.time_week}>
          <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
          <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
        </div>
      </label>

      <label className="radio-inline">
        <input type="radio" name="fildname" />
        <div className={styles.date_day}>
          <span className={styles.date}>OCT 12th </span>
          <span className={styles.week}>Weekend Batch </span>
        </div>
        <div className={styles.time_week}>
          <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
          <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
        </div>
      </label>
    </section>
  );
};

export default BatchTable;

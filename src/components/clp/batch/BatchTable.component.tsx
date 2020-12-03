import React from "react";
import styles from "./batchtable.module.scss";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.939"
            height="16"
            viewBox="0 0 9.939 16"
          >
            <path
              fill="#ffffff"
              d="M100.706 15.917l6.171-10.627a.334.334 0 0 0-.334-.5l-4.105.558.981-5.148a.167.167 0 0 0-.3-.132l-6.068 8.01a.334.334 0 0 0 .3.534l4.526-.476L100.4 15.8a.167.167 0 0 0 .306.117z"
              transform="translate(-96.985)"
            />
          </svg>
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

import React from 'react';
import styles from './batchtable.module.scss';



class BatchTable extends React.Component{

    render(){
        return(
          
        <section className={styles.batchtable_section}>
          
            <label className="radio-inline"><input type="radio" name="fildname"/>
              <div className={styles.date_day}>
                <span className={styles.date}>OCT 12th </span>
                <span className={styles.week}>Weekend Batch	</span>
              </div>
              <div className={styles.time_week}>
                <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
                <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
              </div>
            </label>
         
            <label className="radio-inline"><input type="radio" name="fildname"/>
              <div className={styles.date_day}>
                <span className={styles.date}>OCT 12th </span>
                <span className={styles.week}>Weekend Batch	</span>
              </div>
              <div className={styles.time_week}>
                <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
                <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
              </div>
            </label>

            <label className="radio-inline"><input type="radio" name="fildname"/>
              <div className={styles.date_day}>
                <span className={styles.date}>OCT 12th </span>
                <span className={styles.week}>Weekend Batch	</span>
              </div>
              <div className={styles.time_week}>
                <span className={styles.dayweek}>SAT & SUN (6 WEEKS) </span>
                <span className={styles.time}>08:30 PM to 11:30 PM (IST)</span>
              </div>
            </label>
            
        </section>

          
        )  
    }
}

export default BatchTable;
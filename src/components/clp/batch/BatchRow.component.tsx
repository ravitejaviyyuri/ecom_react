import React from "react";
import styles from "./batchtable.module.scss";
import { SparkIcon } from "../../shared/icons/sparkicon";
import {getMonthName,getTimeString} from './../../../utils/dateFormat';
type Props = {
    batch: any,
    type: String;
    index: Number;
}
const BatchRow = ({batch,type,index}: Props) => {
 
  let tag: any;
  if(type == "live" && index == 0){

     tag = <div> <input type="radio" name="fildname" />
     <div className={styles.filling_fast}>
      <span>Filling Fast</span>
      <SparkIcon color="#ffffff" />
    </div></div>
  }else if(type == "live"){
    tag = <div> <input type="radio" name="fildname" /> </div>
  }else if(type == "sold"){
      tag = <div className={styles.sold_out}>SOLD OUT</div>
  }
  let weekend_tag : any = "";
  let short_tag: any;
  if(batch.days_diff == "1"){
    short_tag = <span className={styles.dayweek}>SAT & SUN ({batch.short_desc}) </span>
     weekend_tag = <span className={styles.week}>Weekend Batch </span>
  }else{
    short_tag = <span className={styles.dayweek}>MON - FRI ({batch.short_desc}) </span>
  }

  return (
    <label  className={`radio-inline ${ type=="sold"? styles.disabled_sold_out:""}`}>
        {tag}
        <div className={styles.date_day}>
          <span className={styles.date}>{getMonthName(batch.starts_on)} </span>
          {weekend_tag}
        </div>
        <div className={styles.time_week}>
          {short_tag}
          <span className={styles.time}>{getTimeString(batch.starts_on)+" to "+getTimeString(batch.ends_on) +"(IST)" }</span>
        </div>
      </label>   
  );
};

export default BatchRow;

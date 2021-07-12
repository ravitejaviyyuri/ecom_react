
import React, { useState, useEffect} from "react";
import styles from "./countdowntimer.module.scss";

const Countdown = (props: any) => {
  const [countdownDate] = useState(new Date('09/25/2021').getTime());  /*  MM/DD/yyyy   */
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);
  
  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days:any = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours:any = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes:any = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds:any = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
      <div className={styles.countdown_wrapper}>
        <div className={`${styles.time_section} ${styles.time_section_width}`}>
          <div className={styles.time} style={{color:props.colorchange,fontSize:props.fontchange}}>{state.days || '0'}</div>
          <small className={styles.time_text} style={{color:props.colorchange,fontSize:props.fontchangetext}}>d</small>
        </div>
        <div className={styles.time_section} style={{display:props.displayviewdot}}>
          <div className={styles.dot} style={{color:props.colorchange,fontSize:props.fontchangedot}}>:</div>
        </div>
        <div className={`${styles.time_section} ${styles.time_section_width}`}>
          <div className={styles.time} style={{color:props.colorchange,fontSize:props.fontchange}}>{state.hours || '00'}</div>
          <small className={styles.time_text} style={{color:props.colorchange,fontSize:props.fontchangetext}}>h</small>
        </div>
        <div className={styles.time_section} style={{display:props.displayviewdot}}>
          <div className={styles.dot}style={{color:props.colorchange,fontSize:props.fontchangedot}}>:</div>
        </div>
        <div className={`${styles.time_section} ${styles.time_section_width}`}>
          <div className={styles.time} style={{color:props.colorchange,fontSize:props.fontchange}}>{state.minutes || '00'}</div>
          <small className={styles.time_text} style={{color:props.colorchange,fontSize:props.fontchangetext}}>m</small>
        </div>
        <div className={styles.time_section} style={{display:props.displayviewdot}}>
          <div className={styles.dot}style={{color:props.colorchange,fontSize:props.fontchangedot}}>:</div>
        </div>
        <div className={`${styles.time_section} ${styles.time_section_width}`}>
          <div className={styles.time} style={{color:props.colorchange,fontSize:props.fontchange}}>{state.seconds || '00'}</div>
          <small className={styles.time_text} style={{color:props.colorchange,fontSize:props.fontchangetext}}>s</small>
        </div>
      </div>
  );
};

export default Countdown;

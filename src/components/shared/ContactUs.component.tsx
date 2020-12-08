import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./contactus.module.scss";
import { PhoneIcon } from "./icons/phoneicon";
import { RightArrowIcon } from "./icons/rightarrowicon";

const ContactUs = (props: any) => {
  const [isContactUS, setContactUs] = useState(false);

  return (
    <div className={styles.contact_us_container}>
      <div
        className={styles.contact_us_btn}
        onClick={() => {
          setContactUs(true);
        }}
      >
        CONTACT US
      </div>
      <CSSTransition
        unmountOnExit
        in={isContactUS}
        timeout={400}
        appear
        classNames="contactus-transition"
      >
        <div className={styles.contact_us_content}>
          <div
            className={styles.hide_btn}
            onClick={() => {
              setContactUs(false);
            }}
          >
            HIDE <RightArrowIcon color="#0052cc" />
          </div>
          <div className={styles.heading}>Call us for any query</div>
          <div className={styles.top_section}>
            <div className={styles.phone_icon}>
              <PhoneIcon color="#192f60" />
            </div>
            <div className={styles.contact_info}>
              <span className={styles.number}>08040423753</span>
              <span className={styles.info}>
                Available 24x7 for your queries
              </span>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ContactUs;

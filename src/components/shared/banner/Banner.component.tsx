import React, { useState, useContext } from "react";
import styles from "./banner.module.scss";
import { PhoneIcon } from "../icons/phoneicon";
import { DownFilledArrow } from "../icons/downfilledarrow";
import  Countdown  from "./countdowntimer/CountdownTimer.component";
import {AppContext} from "../../../store";
import BannerPopup from "../banner/bannerpopup/BannerPopup.component";
import ContactPopup from "../banner/contactpopup/ContactPopup.component";


const Bannernew = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  const [isContactModal, setContactModal] = useState(false);
  // const {state, dispatch} = useContext(AppContext);
  return (
    <section className={styles.top_strip_banner_contact}>
      <div className={styles.contact_view_bx}>
        <PhoneIcon color="#ffffff" /> New Course Enquiry : 
          <span>
            <img src="/inr.png" alt="flag" /> 
            <a href="tel:+91 89517 55408" className={styles.countryChangeNumber}>+91 89517 55408</a> 
            <i onClick={() => {setContactModal(true);}} className={styles.downarrow}>
              <DownFilledArrow color="#ffffff"/>
            </i>
          </span>
      </div>

      <div className={styles.offer_view_bx} onClick={() => {setOpen(true);}}>
        <span>Double Delight Offer</span> <span>- Flat 10% Off + 20% Cashback</span> 
        <span className={styles.endsin}>
          Ends in : <Countdown displayviewdot="none"  colorchange="#ffffff" fontchange="" fontchangetext="" fontchangedot=""/>
          <span className={styles.grabnow}>GRAB NOW</span>
        </span>
      </div>
      <BannerPopup
        show={isOpen}
        handleClose={() => {
          setOpen(false);
        }}
      />
      <ContactPopup
        show={isContactModal}
        handleClose={() => {
          setContactModal(false);
        }}
      />
    </section>
  );
};

export default Bannernew;

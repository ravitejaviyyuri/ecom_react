import Head from "next/head";
import React, { useState, useEffect } from "react";
import LoginSignup from "../shared/LoginSignup/LoginSignup.component";
import Bannernew from "../shared/banner/Banner.component";
import HeaderNavbar from "../shared/header/Navbar.component";
import Footer from "../shared/Footer/Footer.component";
import DUQ from "../shared/DUQ.component";
import ContactUs from "../shared/ContactUs.component";
import ResponsiveFooter from "../shared/Footer/ResponsiveFooter.component";
import ExitIntentPopup from "../clp/ExitIntent/ExitIntent.component";
import StartLearning from "../clp/StartLearningPopup/StartLearning.component";
import HelpChooseCourse from "../clp/HelpChooseCourse/HelpChooseCourse.component";
import {Country} from "../../interfaces/country";
import Loader from "../shared/Loader/Loader.component";

function ClpLayout(props: any) {
  const [isLoader, setLoader] = useState(false);
  const [isMob, setMob] = useState(false);
  const [showExitIntent, setExitIntent] = useState(false);
  const [showLoginSignup, setLoginSignup] = useState(false);
  const [isLogin, setLogin] = useState("login");
  const [showStartLearning, setStartLearning] = useState(false);
  const [showHelpCourse, setHelpCourse] = useState(false);

  const handleLoginSignup = (state: boolean, type: string) => {
    setLoginSignup(state);
    setLogin(type);
  };

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
  }, []);

  return (
    <div className="top_margin_fix_header">
      {isLoader && <Loader />}
      <Head>
        <title>Edureka - Devpops</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Bannernew></Bannernew>
      <HeaderNavbar setLoginSignup={handleLoginSignup}  searchtabs={props.searchtabs} categories={props.categories}/>
      <LoginSignup
        show={showLoginSignup}
        type={isLogin}
        handleClose={() => {
          setLoginSignup(false);
        }}
        handleType={setLogin}
        options={props.options}
      />
      {!isMob ? <ContactUs /> : null}
      {props.children}
      <ExitIntentPopup
        show={showExitIntent}
        handleClose={() => {
          setExitIntent(false);
        }}
      />
      <StartLearning
        show={showStartLearning}
        handleClose={() => {
          setStartLearning(false);
        }}
      />
      <HelpChooseCourse
        show={showHelpCourse}
        handleClose={() => {
          setHelpCourse(false);
        }}
      />
      <Footer countries={props.countryopt} />
      {isMob ? <ResponsiveFooter countries={props.countryopt} /> : <DUQ countries={props.countryopt} />}
    </div>
  );
}

export default ClpLayout;

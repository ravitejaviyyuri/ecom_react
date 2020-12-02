import Head from "next/head";
import React, { useState, useEffect } from "react";
import HeaderNavbar from "../shared/header/Navbar.component";
import Footer from "../shared/Footer/Footer.component";
import DUQ from "../shared/DUQ.component";
import ResponsiveFooter from "../shared/Footer/ResponsiveFooter.component";
import ExitIntentPopup from "../clp/ExitIntent/ExitIntent.component";

function ClpLayout(props: any) {
  const [isMob, setMob] = useState(false);
  const [showExitIntent, setExitIntent] = useState(false);

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
      <Head>
        <title>Edureka - Devpops</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderNavbar />
      {props.children}
      <ExitIntentPopup
        show={showExitIntent}
        handleClose={() => {
          setExitIntent(false);
        }}
      />
      <Footer />
      {isMob ? <ResponsiveFooter /> : <DUQ />}
    </div>
  );
}

export default ClpLayout;

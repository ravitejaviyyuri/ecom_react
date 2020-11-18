import Head from "next/head";
import React, { useState, useEffect } from "react";
import Footer from "../shared/Footer/Footer.component";
import Navbar from "../shared/Navbar.component";
import DUQ from "../shared/DUQ.component";
import ResponsiveFooter from "../shared/Footer/ResponsiveFooter.component";

function ClpLayout(props: any) {
  const [isMob, setMob] = useState(false);
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
    <div>
      <Head>
        <title>Edureka - Devpops</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
      {isMob ? <ResponsiveFooter /> : <DUQ />}
    </div>
  );
}
export default ClpLayout;

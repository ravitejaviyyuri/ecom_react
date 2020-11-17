import Head from "next/head";
import Footer from "../shared/Footer/Footer.component";
import Navbar from "../shared/Navbar.component";
import DUQ from "../shared/DUQ.component"

function ClpLayout(props: any) {
  return (
    <div>
      <Head>
        <title>Edureka - Devpops</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
      <DUQ />
    </div>
  );
}
export default ClpLayout;

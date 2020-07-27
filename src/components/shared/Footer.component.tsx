import { CSSProperties } from "react";
import Link from 'next/link';

const Footer = () => {
  const mystyle:CSSProperties = {
      "position": "absolute",
      "bottom": "0",
      "width": "100%",
      "backgroundColor": "#333",
      "color":"#fff",
  };
  return (
      <footer style={mystyle} className="page-footer font-small bg-blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <p>support@edureka.co</p>
            </div>
            <div className="col-md-6 mb-md-0 mb-3">
              <a href="https://www.edureka.co/privacy-policy">Privacy Policy </a> | 
              <Link href="/career"><a> Career </a></Link>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
        © 2020 Brain4ce Education Solutions Pvt. Ltd. All rights Reserved.
        </div>
      </footer>
  );
};
export default Footer;
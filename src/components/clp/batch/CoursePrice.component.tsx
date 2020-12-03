import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./courseprice.module.scss";

const Courseprice = () => {
  return (
    <section className={styles.courseprice_section}>
      <div className={styles.title}>Course Price at</div>
      <Row>
        <Col className={styles.price_course}>
          <span className={styles.main}>₹ 23,444</span>
          <span className={styles.cut}>₹ 23,444</span>
        </Col>
        <Col className={styles.info_price}>
          <ul>
            <li>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
              >
                <title></title>
                <g id="icomoon-ignore"></g>
                <path
                  fill="#36b37e"
                  d="M374.979 866.499l-374.979-374.979 68.754-69.242 306.225 306.225 557.349-557.836 69.242 68.754-626.59 627.078z"
                ></path>
              </svg>
              Money Back Guaranteed
            </li>
            <li>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
              >
                <title></title>
                <g id="icomoon-ignore"></g>
                <path
                  fill="#36b37e"
                  d="M374.979 866.499l-374.979-374.979 68.754-69.242 306.225 306.225 557.349-557.836 69.242 68.754-626.59 627.078z"
                ></path>
              </svg>
              GST Inclusive
            </li>
          </ul>
        </Col>
      </Row>
      <div className={styles.timer_bx}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="23"
          viewBox="0 0 19 23"
        >
          <text
            id="_"
            data-name="⏳"
            transform="translate(0 18)"
            fill="#192f60"
            fontSize="14"
            fontFamily="AppleColorEmoji, Apple Color Emoji"
          >
            <tspan x="0" y="0">
              ⏳
            </tspan>
          </text>
        </svg>
        <span>15% OFF Expires in 01D 18H 41M </span>
      </div>
      <Button className={styles.buttonenr}>ENROLL NOW</Button>
      <div className={styles.View_more_pri}>
        <svg
          id="icon_alert_error_outline_24px"
          data-name="icon/alert/error_outline_24px"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <rect id="Boundary" width="18" height="18" fill="none" />
          <path
            id="_Color"
            data-name=" ↳Color"
            d="M6.993,14A7,7,0,1,1,14,7,7,7,0,0,1,6.993,14ZM7,1.4A5.6,5.6,0,1,0,12.6,7,5.606,5.606,0,0,0,7,1.4Zm.7,9.1H6.3V9.1H7.7v1.4Zm0-2.8H6.3V3.5H7.7V7.7Z"
            transform="translate(2 2)"
            fill="#526ca7"
          />
        </svg>
        No Cost EMI starts at 1,699 / month <a>View more</a>
      </div>
    </section>
  );
};

export default Courseprice;

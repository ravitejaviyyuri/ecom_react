import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./courseprice.module.scss";
import { TickIcon } from "../../shared/icons/tickicon";
import { HourGlassIcon } from "../../shared/icons/hourglassicon";
import { InfoIcon } from "../../shared/icons/infoicon";
type Props ={
  price: string;
}
const Courseprice = ({price}: Props) => {
  return (
    <section className={styles.courseprice_section}>
      <div className={styles.title}>Course Price at</div>
      <Row>
        <Col className={styles.price_course}>
          <span className={styles.main}>{"₹ " + price}</span>
          <span className={styles.cut}>{"₹ " + price}</span>
        </Col>
        <Col className={styles.info_price}>
          <ul>
            <li>
              <TickIcon color="#36b37e" />
              Money Back Guaranteed
            </li>
            <li>
              <TickIcon color="#36b37e" />
              GST Inclusive
            </li>
          </ul>
        </Col>
      </Row>
      <div className={styles.timer_bx}>
        <HourGlassIcon />
        <span>15% OFF Expires in 01D 18H 41M </span>
      </div>
      <Button className={styles.buttonenr}>ENROLL NOW</Button>
      <div className={styles.View_more_pri}>
        <InfoIcon color="#526ca7" />
        No Cost EMI starts at 1,699 / month <a>View more</a>
      </div>
    </section>
  );
};

export default Courseprice;

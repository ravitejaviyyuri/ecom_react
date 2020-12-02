import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from './courseprice.module.scss';



class Courseprice extends React.Component{

    render(){
        return(
          
        <section className={styles.courseprice_section}>
          <div className={styles.title}>Course Price at</div>
          <Row>
            <Col className={styles.price_course}>
              <span className={styles.main}>₹ 23,444</span>
              <span className={styles.cut}>₹ 23,444</span>
            </Col>
            <Col className={styles.info_price}>
              <ul>
                <li>Money Back Guaranteed</li>
                <li>GST Inclusive</li>
              </ul>
            </Col>
          </Row>
          <div className={styles.timer_bx}></div>
          <Button className={styles.buttonenr}>ENROLL NOW</Button>
          <div className={styles.View_more_pri}>
            No Cost EMI starts at 1,699 / month <a>View more</a>
          </div>
        </section>

          
        )  
    }
}

export default Courseprice;
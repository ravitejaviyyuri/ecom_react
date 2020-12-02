import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import styles from './batch.module.scss';
import BatchTable from './BatchTable.component';
import Courseprice from './CoursePrice.component';
import Button from 'react-bootstrap/Button';
class BatchComponent extends React.Component{
  render(){
    return(
        
      <section className={styles.batchtable_enroll_section}>
        <Container>
          <div className={styles.section_title}>Our flexible batches</div>
          <Col className={styles.flex_custome}>
            <Col className="p-0" xs={12} md={8}><BatchTable /></Col>
            <Col className={styles.course_price_back} xs={12} md={4}><Courseprice /></Col>
          </Col>
          <Button className={styles.cant_find_batch}>Cant find a batch?</Button>
        </Container>
      </section>
    )  
  }
};
  export default BatchComponent;
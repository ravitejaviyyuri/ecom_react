import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import styles from "./openform.module.scss";

const OpenForm = () => {
  return (
    <div className={styles.open_form}>
      <div className={styles.heading}>Be future ready, start learning</div>
      <Form className="mt-4">
        <Form.Row className={styles.form_row}>
          <Form.Group
            as={Col}
            className={`position-relative ${styles.form_group}`}
          >
            <Form.Label className={styles.label}>Phone Number</Form.Label>
            <CountryCodeSelect className={styles.code_select} />
            <Form.Control
              className={`${styles.input} ${styles.phone_input}`}
              type="tel"
              placeholder="Enter Phone Number*"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={`position-relative ${styles.form_group}`}
          >
            <Form.Label className={styles.label}>Email Id</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Button className={styles.submit} variant="primary">
            ENROLL
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default OpenForm;

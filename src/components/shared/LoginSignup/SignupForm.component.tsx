import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../CountryCodeSelect.component";
import styles from "./form.module.scss";

const LoginForm = (props: any) => {
  return (
    <Form className={styles.form}>
      <Form.Group controlId="signupFormEmail">
        <Form.Label className={styles.label}>Email Id</Form.Label>
        <Form.Control
          className={styles.input}
          type="email"
          placeholder="eg@saga.gmail.com"
        />
      </Form.Group>
      <Form.Group controlId="signupFormPhone" className="position-relative">
        <Form.Label className={styles.label}>Phone Number</Form.Label>
        <CountryCodeSelect className={styles.code_select} />
        <Form.Control
          className={`${styles.input} ${styles.phone_input}`}
          type="tel"
          placeholder="Enter Phone Number*"
        />
      </Form.Group>
      <div className={styles.note}>
        <span>Please Note</span> : By continuing and signing in, you agree to
        Edureka’s <a href="">Terms & Conditions</a> and{" "}
        <a href="">Privacy Policy</a>.
      </div>
      <div className={styles.tc_privacy_div}>
        <Form.Group className={styles.check_form_group}>
          <Form.Check
            type="checkbox"
            label="I Wish to receive promotional offers from edureka"
            className={styles.check_label}
          />
        </Form.Group>
        <Form.Group className={styles.check_form_group}>
          <Form.Check type="checkbox" className={styles.check_label}>
            <Form.Check.Input type="checkbox" />
            <Form.Check.Label>
              I Agree <a href="">T&C</a> and <a href="">Privacy Policy</a>
            </Form.Check.Label>
          </Form.Check>
        </Form.Group>
      </div>
      <Button className={styles.submit} variant="primary">
        SIGNUP
      </Button>
      <div className={styles.change_form}>
        Already have an account?{" "}
        <span onClick={() => props.setLogin("login")}>Log In</span>
      </div>
    </Form>
  );
};

export default LoginForm;

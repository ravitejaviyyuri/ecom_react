import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./form.module.scss";

const LoginForm = (props: any) => {
  return (
    <Form className={styles.form}>
      <Form.Group controlId="loginFormEmail">
        <Form.Label className={styles.label}>Email Id</Form.Label>
        <Form.Control
          className={styles.input}
          type="email"
          placeholder="eg@saga.gmail.com"
        />
      </Form.Group>
      <Form.Group controlId="loginPassword" className="position-relative">
        <Form.Label className={styles.label}>Password</Form.Label>
        <Form.Control
          className={`${styles.input}`}
          type="password"
          placeholder="Enter your Password"
        />
        <span className={styles.forgot_password}>Forgot?</span>
      </Form.Group>
      <div className={styles.note}>
        <span>Please Note</span> : By continuing and signing in, you agree to
        Edureka’s <a href="">Terms & Conditions</a> and{" "}
        <a href="">Privacy Policy</a>.
      </div>
      <Button className={styles.submit} variant="primary">
        LOGIN
      </Button>
      <div className={styles.change_form}>
        Don’t have an account?{" "}
        <span onClick={() => props.setLogin("signup")}>Sign Up</span>
      </div>
    </Form>
  );
};

export default LoginForm;

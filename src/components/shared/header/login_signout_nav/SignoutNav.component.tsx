import React, { useState, useEffect } from "react";
import { Nav, Button, Dropdown } from "react-bootstrap";
import styles from "./loginsignoutnav.module.scss";

const SignoutNav = (props: any) => {
  return (
    <>
      <Nav className={`${styles.right_links} ${styles.hide_mob}`}>
        {/* <Nav.Item>
          <Nav.Link className={styles.right_links_a} href="/">
            Corporate Training
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link className={styles.right_links_a} href="/">
            All Courses
          </Nav.Link>
        </Nav.Item>
        <Dropdown className={styles.offering_drop}>
          <Dropdown.Toggle>
            Offerings
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.offering_list_drop} alignRight>
            <Dropdown.Item href="#">Blog</Dropdown.Item>
            <Dropdown.Item href="#">Webinars</Dropdown.Item>
            <Dropdown.Item href="#">Community</Dropdown.Item>
            <Dropdown.Item href="#">Corporate Training </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <Nav.Item>
          <Nav.Link className={styles.right_links_a} href="/">
            Blog
          </Nav.Link>
        </Nav.Item> */}
        <Button
          className={styles.sign_up}
          onClick={() => {
            props.setLoginSignup(true, "signup");
          }}
        >
          Sign up
        </Button>
        <Button
          className={styles.login_in}
          onClick={() => {
            props.setLoginSignup(true, "login");
          }}
        >
          Log in
        </Button>
      </Nav>
    </>
  );
};

export default SignoutNav;

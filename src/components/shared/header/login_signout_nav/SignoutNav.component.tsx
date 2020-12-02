import React, { useState, useEffect } from "react";
import { Nav,Button } from 'react-bootstrap';
import styles from './loginsignoutnav.module.scss';

const SignoutNav = () => {
  
  return(
    <>
   
    
      
      <Nav className={styles.right_links} >
          <Nav.Item>
            <Nav.Link className={styles.right_links_a} href="/">signout</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.right_links_a} href="/">All Courses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.right_links_a} href="/">Blog</Nav.Link>
          </Nav.Item>
          <Button className={styles.login_in}>Log in</Button>
          <Button className={styles.sign_up}>Sign up</Button>
      </Nav>
    
    </>
    
  )  
   
}

export default SignoutNav;
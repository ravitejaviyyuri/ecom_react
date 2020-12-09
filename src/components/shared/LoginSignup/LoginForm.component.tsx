import React, { useContext, useState} from "react";
import { AppContext } from '../../../store';
import UPDATE_USER_STATE from '../../../store/user/action';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./form.module.scss";
import {userLogin} from "../../../api/services/login.service"
//import {AuthContext} from './../context/Auth.context';

const LoginForm = (props: any) => {
 
  const {state, dispatch} = useContext(AppContext);
   let message = ""
  const onSubmitHandler = (event:any) =>{
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);  
   
    let response = userLogin(event.target.email.value, event.target.password.value);
    response.then((res: any) => {
      if(res.status == "200"){
        props.handleClose()
        console.log(res.userData);
        console.log(res.userData.mobileNo);
       // let cookieRes = verifyCookie(res.userData.sessionId);
       }else{
         message = "Incorrect Password or username";
       }
      })

      // const userData = {id:1, name:"", email:event.target.email.value}
      // dispatch({ type: UPDATE_USER_STATE.type,
      // action: UPDATE_USER_STATE.action.UPDATE_LOGIN,
      // data: userData})
    }

  console.log(state);
  return (
    <Form onSubmit={onSubmitHandler} className={styles.form}>
      <Form.Group controlId="loginFormEmail">
        <Form.Label className={styles.label}>Email Id</Form.Label>
        <Form.Control
          name="email"
          className={styles.input}
          type="email"
          placeholder="eg@saga.gmail.com"
          // value = {state.userState.userInfo.userDetails.email}
        />
      </Form.Group>
      <Form.Group controlId="loginPassword" className="position-relative">
        <Form.Label className={styles.label}>Password</Form.Label>
        <Form.Control
          name="password"
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
      <Button  type="submit" className={styles.submit} variant="primary">
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

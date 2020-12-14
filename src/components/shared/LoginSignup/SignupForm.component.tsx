import React,{useContext} from "react";
import { AppContext } from '../../../store';
import UPDATE_USER_STATE from '../../../store/user/action';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../CountryCodeSelect.component";
import styles from "./form.module.scss";
import {userSignup} from "../../../api/services/signup.service"
import {createCookie} from "../../../utils/cookie";
import {cookie_const} from "../../../utils/constants";

const SignupForm = (props: any) => {

    const {state, dispatch} = useContext(AppContext);
    let message = ""
    const onSubmitHandler = (event:any) =>{
      event.preventDefault();
      console.log(event.target.email.value);
      let response = userSignup(event.target.email.value, event.target.mobile.value);
      response.then((res: any) => {
        if(res.status == "200"){
          props.handleClose()
          console.log("signin......");
          console.log(res.userData);
         //Data = {id:res.userData.userid, name:res.userData.firstName, email:res.userData.emailAddress};
          const loginStatus = {islogin:true};
          dispatch({ type: UPDATE_USER_STATE.type,
          action: UPDATE_USER_STATE.action.UPDATE_SIGNUP,
          data: {userData:res.userData, loginStatus:loginStatus }})
          
            //creating cookies
            createCookie(cookie_const.COOKIE_BRAIN4CE,res.userData.sessionId);
            createCookie(cookie_const.COOKIE_USER_EMAIL,res.userData.emailAddress);
            createCookie( cookie_const.COOKIE_USER_PHONE,res.userData.mobileNo);
            //createCookie( cookie_const.COOKIR_USER_COUNTRY_CODE,res.userData.);
          

          }else{
            console.log("error");
            message = "InValid Email or Mobile Number";
          }
        })

      }


  return (
    <Form onSubmit={onSubmitHandler} className={styles.form}>
      <Form.Group controlId="signupFormEmail">
        <Form.Label className={styles.label}>Email Id</Form.Label>
        <Form.Control
          className={styles.input}
          type="email"
          name="email"
          placeholder="eg@saga.gmail.com"
        />
      </Form.Group>
      <Form.Group controlId="signupFormPhone" className="position-relative">
        <Form.Label className={styles.label}>Phone Number</Form.Label>
        <CountryCodeSelect className={styles.code_select} />
        <Form.Control
          className={`${styles.input} ${styles.phone_input}`}
          type="tel"
          name="mobile"
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
      <Button type="submit" className={styles.submit} variant="primary">
        SIGNUP
      </Button>
      <div className={styles.change_form}>
        Already have an account?{" "}
        <span onClick={() => props.setLogin("login")}>Log In</span>
      </div>
    </Form>
  );
};

export default SignupForm;

import React, { useState, useEffect, useContext } from "react";
import {AppContext} from '../../store';
import UPDATE_USER_STATE from '../../store/user/action';
import { CSSTransition } from "react-transition-group";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CountryCodeSelect from "./CountryCodeSelect.component";
import styles from "./duq.module.scss";
import { PhoneIcon } from "./icons/phoneicon";
import { DownChevronIcon } from "./icons/downchevronicon";
import  validateDuqForm  from "./DuqFormValidator.component";
import {sendDuqData} from "../../api/services/duq.sevice";
import Loader from "./Loader/Loader.component";
import SubmissionSuccessScreen from "./success-screens/SubmissionSuccessScreen.component"

const DUQ = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  const [isMob, setMob] = useState(false);

  const {state, dispatch} = useContext(AppContext);

  const initalFomState : any = {
    email : state.userState.userInfo.userDetails.emailAddress,
    phone : state.userState.userInfo.userDetails.mobileNo,
    query : '',
    code : state.userState.userInfo.userDetails.mobileCode,
    countryCode : state.userState.userInfo.userDetails.countryCode,
    country : state.userState.userInfo.userDetails.country
  }
  
  const [formstate, setFormState] = useState(initalFomState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false);

  // console.log(JSON.stringify(formstate));
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
        setOpen(true);
      } else {
        setMob(false);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {

      let DataForApi = {
        code : formstate.code,
        phone_no : formstate.phone,
        email : formstate.email,
        query : formstate.query,
        course_id : state.userState.baseCourseInfo.id,
        course_slug : state.userState.baseCourseInfo.slug,
        clp_version :'',
        offer_id : '',
        pageurl : window.location.href,
        edu_token : `duqform#${state.userState.tokenInfo.token}#${state.userState.tokenInfo.time}`,
        position : 801
     }

    // console.log(DataForApi);
     sendDuqData(DataForApi).then((res : any) => {
     //  console.log(JSON.stringify(res));
     setIsSubmissionSuccess(true);
       setIsSubmitting(false)
     }).catch(err => {
        
      let serverErrorMessage = '';
       try {
         serverErrorMessage = err.response.data.msg;
       } catch(e) {
         serverErrorMessage = "something went wrong";
       }
       setErrors({
         serverErrorMessage : serverErrorMessage
       });
    //   console.log(errors);
       setIsSubmitting(false)
     });
    } else {
   //   console.log(JSON.stringify(errors));
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleClick = () => {
    setOpen(!isOpen);
    isSubmissionSuccess ? setIsSubmissionSuccess(false) : '';
    setErrors({});
    if (isMob) {
      props.setDUQ(false);
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormState((prevState : any) => ({
        ...prevState,
        [name]: value
    }));
    //console.log(JSON.stringify(formstate));
};

  const onSubmitHandler= (e:any) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_USER_STATE.type,
      action: UPDATE_USER_STATE.action.BASIC_AUTO_POPULATE_INFO,
      data: { email: formstate.email, phone: formstate.phone},
    });

    setErrors(validateDuqForm({
      code : formstate.code,
         phone : formstate.phone,
         email : formstate.email,
         query : formstate.query,
    }));
    setIsSubmitting(true);
  };

  return (
    <>
     {isSubmitting && <Loader />}

    <CSSTransition in={isOpen} timeout={400} classNames="duq-transition" appear>
      <div className={styles.DUQ_container}>
        <div className={styles.header} onClick={handleClick}>
          <span className={styles.title}>Drop us a Query</span>
          <span
            className={`${styles.chevron_icon} ${
              isOpen ? styles.closed : styles.open
            }`}
          >
            <DownChevronIcon color="#27b8cc" />
          </span>
        </div>
        { isSubmissionSuccess ? <SubmissionSuccessScreen  /> : 
        <CSSTransition unmountOnExit in={isOpen} timeout={400} appear>
          <div className={styles.body}>
            <div className={styles.top_section}>
                <img src="/24x7-available.png" alt="image" />
                <span className={styles.info}>
                  Available 24x7 for your queries
                </span>
            </div>
            <Form className={styles.form} onSubmit={onSubmitHandler} >
              <Form.Group controlId="duqFormTextarea">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your query here*"
                  className={styles.input}
                  name = "query"
                  onChange = {handleChange}
                  value={formstate.query}
                />
              </Form.Group>
              {"query" in errors && <p>{errors['query']}</p>}
              <Form.Group
                controlId="duqFormPhoneNumber"
                className="position-relative"
              >
                <Form.Label className={styles.label}>Phone Number</Form.Label>
                <CountryCodeSelect 
                className={styles.code_select} 
                options={props.countries} 
                onChange = {handleChange} 
                phoneCode = {formstate.code} 
                countryCode = {formstate.countryCode} 
                country = {formstate.country}/>
                <Form.Control
                  className={`${styles.input} ${styles.phone_input}`}
                  type="tel"
                  placeholder="Enter Phone Number*"
                  name = "phone"
                  onChange = {handleChange}
                  value = {formstate.phone}
                />
              </Form.Group>
              {"phone" in errors && <p>{errors['phone']}</p>}
              <Form.Group controlId="duqFormEmail">
                <Form.Label className={styles.label}>Email Id</Form.Label>
                <Form.Control
                  className={styles.input}
                  type="email"
                  placeholder="eg@saga.gmail.com"
                  name = "email"
                  onChange = {handleChange}
                  value = {formstate.email}
                />
              </Form.Group>
              {"email" in errors && <p>{errors['email']}</p>}
              <Button className={styles.submit} variant="primary" type="submit">
                SUBMIT QUERY
              </Button>
              {"serverErrorMessage" in errors && <p>{errors['serverErrorMessage']}</p>}
            </Form>
            <div className={styles.talktous}>
              <span>Or, talk to a course Counsellor</span>
              <a href="callto:+14072345678">Call +1 407 2345678</a>
            </div>
          </div>
        </CSSTransition> }
      </div>
          </CSSTransition> 
    </>
  );
};

//all state updates at one place 
// const useFormInput  = (fieldValue : any) => {
//   const[value, setValue] = useState(fieldValue);

//   const handleChange =(e:any) => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange : handleChange
//   }
// }

export default DUQ;

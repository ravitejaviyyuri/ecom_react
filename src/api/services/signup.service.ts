import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
//import {login_data} from './../../utils/data'
/**
 * Login user
 */
const userSignup = async (email:string, mobileno:string) => {
  try {
   //let response = await makeServerPost("https://a2com.edureka.in/api/1.0/users/registration", {
    let response = await makeServerPost("https://uatcom.edureka.in/api/1.0/users/registration", {
        "email_address": email,
        "password": "123456789",
        "mobile_no": mobileno
    })
    // let response = login_data;
    return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { userSignup};

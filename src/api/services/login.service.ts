import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import {server} from '../../config/index'
//import {login_data} from './../../utils/data'
/**
 * Login user
 */
const userLogin = async (username:string, password:string) => {
  try {
   //let response = await makeServerPost("https://a2com.edureka.in/api/1.0/users/login", {
  //let response = await makeServerPost("https://uatcom.edureka.in/api/1.0/users/login",
    let response = await makeServerPost(`${server.ECOM_API_URL}/api/1.0/users/login`, {    
        "email_address": username,
        "password": password
    })
    // let response = login_data;
    return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { userLogin};

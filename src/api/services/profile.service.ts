import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import {server} from '../../config/index'
//import {login_data} from './../../utils/data'
/**
 * User Profile
 */
const profile = async (userid:string) => {
  try {
     //let response = await makeServerPost("https://a2com.edureka.in/api/1.0/users/userProfile", {
     // let response = await makeServerPost("https://uatcom.edureka.in/api/1.0/users/userProfile", 
    let response = await makeServerPost(`${server.ECOM_API_URL}/api/1.0/users/userProfile`, {    
        "user_id": userid,
    })
    // let response = login_data;
    return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { profile};

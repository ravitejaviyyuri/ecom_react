import { makeServerPost, makeServerGet } from './api.service';
import {server} from '../../config/index'
/**
 * Get Country Data
 */
const getCsrfToken = async (data : any) => {
  try {
   //let response = await makeServerGet("https://uat-utilities.edureka.in/countries");
   let response = await makeServerPost(`${server.ECOM_API_URL}/rapi_tokens`,data);
 //  let response = await makeServerGet("http://utilities.dev-edureka.co/countries");
   console.log(response);
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCsrfToken };
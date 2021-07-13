import { makeServerPost, makeServerGet } from './api.service';
import {server} from '../../config/index'
/**
 * Get Country Data
 */
const sendDuqData = async (data : any) => {
  try {
   //let response = await makeServerGet("https://uat-utilities.edureka.in/countries");
   let response = await makeServerPost(`${server.ECOM_API_URL}/pages/rapi_dropUsQueryProcess`,data);
 //  let response = await makeServerGet("http://utilities.dev-edureka.co/countries");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { sendDuqData };
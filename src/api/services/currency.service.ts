import { makeServerPost, makeServerGet } from './api.service';
import {Currency} from './../../interfaces/currency'
import {server} from '../../config/index'
/**
 * Get Batch Data
 */
const getCurrencies = async () => {
  try {
   //let response = await makeServerGet("https://uat-utilities.edureka.in/currencies");
   let response = await makeServerGet(`${server.UTILITIES_API_URL}/currencies`);
  // let response = await makeServerGet("http://utilities.dev-edureka.co/currencies");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCurrencies };

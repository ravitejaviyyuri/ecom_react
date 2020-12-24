import { makeServerPost, makeServerGet } from './api.service';
import {Currency} from './../../interfaces/currency'
/**
 * Get Batch Data
 */
const getCurrencies = async () => {
  try {
   let response = await makeServerGet("https://uat-utilities.edureka.in/currencies");
  // let response = await makeServerGet("http://utilities.dev-edureka.co/currencies");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCurrencies };

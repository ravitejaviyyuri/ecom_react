import { makeServerPost, makeServerGet } from './api.service';
import {Currency} from './../../interfaces/currency'
/**
 * Get Batch Data
 */
const getCurrencies = async () => {
  try {
   let response = await makeServerGet("https://a2-utilities.edureka.in/currencies");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCurrencies };

import { makeServerPost, makeServerGet } from './api.service';
import {server} from '../../config/index'
/**
 * Get Country Data
 */
const getCountries = async () => {
  try {
   //let response = await makeServerGet("https://uat-utilities.edureka.in/countries");
   let response = await makeServerGet(`${server.UTILITIES_API_URL}/countries`);
 //  let response = await makeServerGet("http://utilities.dev-edureka.co/countries");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCountries };

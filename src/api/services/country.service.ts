import { makeServerPost, makeServerGet } from './api.service';
/**
 * Get Country Data
 */
const getCountries = async () => {
  try {
   let response = await makeServerGet("https://a2-utilities.edureka.in/countries");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCountries };
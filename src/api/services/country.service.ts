import { makeServerPost, makeServerGet } from './api.service';
/**
 * Get Country Data
 */
const getCountries = async () => {
  try {
   let response = await makeServerGet("https://uat-utilities.edureka.in/countries");
 //  let response = await makeServerGet("http://utilities.dev-edureka.co/countries");
   return response.data;
  } 
  catch (err) {
    throw err;
  }
};

export { getCountries };

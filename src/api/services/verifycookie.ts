import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
/**
 *Verify Coookie
 */


const verifyCookie = async () => {

  try {
    const options = {
      headers: {'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'}
    };
 
    let response = await makeServerPost("http://api-auth.dev-edureka.co/api/user/verify",
    {"usercookie":"6i5hon2kvfn1811h5iutfti8g6"},options);  

    console.log(response);
    return response.data;

  } 
  catch (err) {
    throw err;
  }
};
export { verifyCookie};

import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
/**
 *Verify Coookie
 */
const verifyCookie = async () => {
  try {
 
    let response = await makeServerGet("http://auth.dev-edureka.co/api/user/verifycookie");  

    console.log(response);
    return response.data;

  } 
  catch (err) {
    throw err;
  }
};
export { verifyCookie};

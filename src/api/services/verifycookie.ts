import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import {server} from '../../config/index'
/**
 *Verify Coookie
 */


const verifyCookie = async (cookie_val:string) => {

      try {
        // const options = {
        //   headers: {'Cache-Control': 'no-cache',
        //   'Content-Type': 'text/html'}
        // };
       // let response = await makeServerPost("http://api-auth.dev-edureka.co/api/user/verifyclpcookie",
        let response = await makeServerPost(`${server.AUTH_API_URL}/api/user/verifyclpcookie`,
        {"usercookie":cookie_val});  
        
        return response;

      } 
      catch (err) {
        throw err;
      }
};
export { verifyCookie};

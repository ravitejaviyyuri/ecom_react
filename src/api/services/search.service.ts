import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import {server} from '../../config/index'
/**
 *Verify Coookie
 */
const searchTabs = async () => {
  try {
 
   // let response = await makeServerGet("https://uat-courses.edureka.in/courses/searchtabs");  
    let response = await makeServerGet(`${server.COURSE_API_URL}/courses/searchtabs`);  

    // console.log(response);
    return response.data;

  } 
  catch (err) {
    throw err;
  }
};
export { searchTabs};

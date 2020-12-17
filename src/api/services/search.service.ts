import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
/**
 *Verify Coookie
 */
const searchTabs = async () => {
  try {
 
    let response = await makeServerGet("https://uat-courses.edureka.in/courses/searchtabs");  

    // console.log(response);
    return response.data;

  } 
  catch (err) {
    throw err;
  }
};
export { searchTabs};

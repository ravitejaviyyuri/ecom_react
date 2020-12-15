import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
/**
 *Verify Coookie
 */
const searchTabs = async () => {
  try {
 
    let response = await makeServerGet("http://new-course.dev-edureka.co/courses/searchtabs");  

    // console.log(response);
    return response.data;

  } 
  catch (err) {
    throw err;
  }
};
export { searchTabs};

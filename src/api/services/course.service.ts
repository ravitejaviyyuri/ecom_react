import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import { Course } from '../../interfaces/course';

/**
 * Get Course Data
 */
const getCourse = async (slug: String) => {
  try {
    //let response = await makeServerGet(config.serverUrl + '/courses/' + slug);
    let responseFromApi = await makeServerPost(`http://new-course.dev-edureka.co/courses/${slug}/slug`,{"required":"helpline,course_sections,related_courses,related_live_courses_for_selfpaced,master_courses,trending_courses,video,highlights,reviews,seo,course_price"});
   responseFromApi = responseFromApi.data.course;
    let response: Course = responseFromApi;
    
   
    return response;
  } 
  catch (err) {
    throw err;
  }
};

export { getCourse };

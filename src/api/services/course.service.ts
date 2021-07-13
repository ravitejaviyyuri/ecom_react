import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import { Course } from '../../interfaces/course';
import {server } from "../../config/index";


/**
 * Get Course Data
 */
const getCourse = async (slug: String) => {
  try {

   //let responseFromApi = await makeServerPost('https://a2-courses.edureka.in/' + '/courses/' + 776+'/all',{"required":"helpline,course_sections,related_courses,related_live_courses_for_selfpaced,master_courses,trending_courses,video,highlights,reviews"});
   //let responseFromApi = await makeServerPost(`https://uat-courses.edureka.in/courses/${slug}/slug`
   let responseFromApi = await makeServerPost(`${server.COURSE_API_URL}/courses/${slug}/slug`,{"required":"helpline,course_sections,related_courses,related_live_courses_for_selfpaced,master_courses,trending_courses,video,highlights,reviews,seo,course_price,allcategories"});
  //let responseFromApi = await makeServerPost(`http://new-course.dev-edureka.co/courses/${slug}/slug`,{"required":"helpline,course_sections,related_courses,related_live_courses_for_selfpaced,master_courses,trending_courses,video,highlights,reviews,seo,course_price,allcategories"});
  
   responseFromApi = responseFromApi.data.course;
    let response: Course = responseFromApi;
    
   
    return response;
  } 
  catch (err) {
    throw err;
  }
};

export { getCourse };

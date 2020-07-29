import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import { Course } from '../../interfaces/course';

/**
 * Get Course Data
 */
const getCourse = async (slug: String) => {
  try {
    //let response = await makeServerGet(config.serverUrl + '/courses/' + slug);
    let response:Course = {
      id: 123,
      course_group: 100,
      course_type: 3,
      title: 'Devops Training',
      description: 'Devops is a blah blah course',
      slug: 'devops',
      price_usd: '499',
      price_inr: '19999',
      image: 'string',
      rating: 5,
      learners_count: 4300,
      business_unit: 'BU 1',
    }
    return response;
  } 
  catch (err) {
    throw err;
  }
};

export { getCourse };

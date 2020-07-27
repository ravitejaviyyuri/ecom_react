import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';

/**
 * Get Course Data
 */
const getCourse = async (slug: string) => {
  try {
    let response = await makeServerGet(config.serverUrl + '/courses/' + slug);
    return response;
  } 
  catch (err) {
    throw err;
  }
};

export { getCourse };

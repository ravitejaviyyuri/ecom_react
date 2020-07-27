import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';

/**
 * Create a Lead
 */
const createLead = async (email: string, mobile: number, countryCode: string) => {
  try {
    let response = await makeServerPost(config.serverUrl + '/leads/create', {
      'email': email,
      'mobile': mobile,
      'code': countryCode,
    });
    return response;
  } 
  catch (err) {
    throw err;
  }
};

export { createLead };

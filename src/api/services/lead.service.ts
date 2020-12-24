import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';
import {server} from '../../config/index'

/**
 * Create a Lead
 */
const createLead = async (email: string, mobile: number, countryCode: string) => {
  try {
    let response = await makeServerPost(`${server.USERS_API_URL}/leads/create`, {
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

/**
 * Get Batch Data
 */
import { makeServerPost, makeServerGet } from './api.service';
import {server} from '../../config/index';
//import config from '../../config/app';

/**
 * Get Batch Data
 */
const getBatches = async (courseId: number) => {
  try {
    // let response = await makeServerGet(`https://uat-batches.edureka.in/batches/live-batches/${courseId}`);
     let response = await makeServerGet(`${server.BATCH_API_URL}/batches/live-batches/${courseId}`);
     response = response.data;
     return response;
  }
  catch (err) {
    throw err;
  }
};

export { getBatches };

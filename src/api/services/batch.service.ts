/**
 * Get Batch Data
 */
import { makeServerPost, makeServerGet } from './api.service';
//import config from '../../config/app';

/**
 * Get Batch Data
 */
const getBatches = async (courseId: number) => {
  try {
     let response = await makeServerGet(`https://a2-batches.edureka.in/batches/live-batches/${courseId}`);
     response = response.data;
     return response;
  }
  catch (err) {
    throw err;
  }
};

export { getBatches };

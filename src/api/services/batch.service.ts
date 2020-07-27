import { makeServerPost, makeServerGet } from './api.service';
import config from '../../config/app';

/**
 * Get Batch Data
 */
const getBatches = async (slug: string) => {
  try {
    let response = await makeServerGet(config.serverUrl + '/courses/' + slug + '/batches');
    return response;
  } 
  catch (err) {
    throw err;
  }
};

export { getBatches };

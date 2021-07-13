import axios, { AxiosResponse } from 'axios';
import HttpStatus from 'http-status-codes';

function handleError(response: AxiosResponse) {
  let message = response.statusText;
  if (!message) {
    response.status === 401
      ? (message = 'You are not authorized. Please check your credentials')
      : (message = 'Unable to make the server call');
  }
  throw new Error(message);
}

const makeServerPost = async (url: string, data = {},options={}) => {
  const response = await axios.post(url, data, options);

  if (response.status !== HttpStatus.OK) {
    return handleError(response);
  }
  return response.data;
};

const makeServerGet = async (url: string) => {
  const response = await axios.get(url);
  if (response.status !== HttpStatus.OK) {
    return handleError(response);
  }
  return response.data;
};

export { makeServerGet, makeServerPost };
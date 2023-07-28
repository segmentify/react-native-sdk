import axios from 'axios';
import { getApiKey, getSubDomain } from '../event-manager/utils';
import { API_ERRORS, API_GET_AWAY_TIME_OUT } from '../constants';

import type { ResponseStatusCodeType } from '../types';

export const apiGetAway = axios.create({
  timeout: API_GET_AWAY_TIME_OUT,
});

apiGetAway.interceptors.request.use(
  async (config) => {
    //@ts-ignore
    config.headers = {
      'X-Sfy-Api-Key': await getApiKey(),
      'Origin': await getSubDomain(),
      'Accept': 'application/json',
      'Content-Type': 'text/plain',
    };
    return config;
  },
  async (error) => {
    const res = await Promise.reject(
      `Request Interceptor Error: ${error?.message}`
    );
    console.error(res);
  }
);

apiGetAway.interceptors.response.use(
  (response) => {
    const responseStatusCode: ResponseStatusCodeType = response.data.statusCode;

    if (responseStatusCode !== 'SUCCESS' && response.data.statusText) {
      response.data.message = API_ERRORS[responseStatusCode].message;
      response.statusText = API_ERRORS[responseStatusCode].statusCode;
      response.status = 400;
    }
    response.statusText = 'SUCCESS';

    return response;
  },
  async (error) => {
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.log('Request timed out');
    }
    const res = await Promise.reject(`Response Interceptor Error: ${error}`);
    console.error(res);
  }
);

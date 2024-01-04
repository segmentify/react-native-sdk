import axios from 'axios';
import { getApiKey, getSubDomain } from '../event-manager/utils';
import { getStorageItem } from './storage';
import { Logger } from './logger';
import { API_ERRORS, API_GET_AWAY_TIME_OUT } from '../constants';

import type { ResponseStatusCodeType } from '../types';

const loggerEnabled = getStorageItem({ key: 'logger' });

/**
 * @memberof module:CoreFunctions
 * @namespace apiGetAway
 * @description Axios instance for making API calls
 * @see {@link API_GET_AWAY_TIME_OUT}
 * @see {@link API_ERRORS}
 * @see {@link Logger}
 * @see {@link module:CoreFunctions.getApiKey}
 * @see {@link ResponseStatusCodeType}
 */

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
    if (await loggerEnabled) {
      return Logger({
        level: 'ERROR',
        message: 'Request Interceptor Error: ',
        payload: error?.message,
      });
    }
    await Promise.reject(`Request Interceptor Error: ${error?.message}`);
  }
);

apiGetAway.interceptors.response.use(
  async (response) => {
    if (await loggerEnabled) {
      Logger({
        level: 'INFO',
        message: 'Response Interceptor: ',
        payload: response.data,
      });
    }

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
      if (await loggerEnabled) {
        Logger({
          level: 'ERROR',
          message: 'Response Interceptor Error: ',
          payload: 'Request timed out',
        });
      }
    } else {
      Logger({
        level: 'ERROR',
        message: 'Response Interceptor Error: ',
        payload: error?.message,
      });
    }

    await Promise.reject(`Response Interceptor Error: ${error}`);
  }
);

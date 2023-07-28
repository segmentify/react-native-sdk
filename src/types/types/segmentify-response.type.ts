import type { API_ERROR_ENUMS } from '../enums';

/**
 * TSEGMENTIFY_CAMPAING_RESPONSE
 * @description
 * TSEGMENTIFY_CAMPAING_RESPONSE is a type that represents the response body for Segmentify API.
 * It is a json object that contains the response of the request.
 * It has a statusCode parameter that represents the status of the request.
 * You can check the possible status codes from API_ERROR_ENUMS constant.
 * It has a timestamp parameter that represents the time of the response.
 * It has a search parameter that represents the search results for the request.
 * It has a campaigns parameter that represents the campaigns results for the request.
 * It has a coupons parameter that represents the coupons results for the request.
 * It has a experiments parameter that represents the experiments results for the request.
 * It has a responses parameter that represents the responses results for the request.
 * Each of these parameters is an array of objects.
 * You can check the possible objects from Segmentify API documentation.
 */

export type TSEGMENTIFY_CAMPAING_RESPONSE = {
  search: Array<any[]>;
  campaigns: Array<any[]>;
  coupons: Array<any[]>;
  experiments: Array<any[]>;
  responses: Array<any[]>;
  statusCode: typeof API_ERROR_ENUMS & { SUCCESS: 'SUCCESS' };
  timestamp: number;
};

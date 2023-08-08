import type { API_ERROR_ENUMS } from '../enums';

/**
 * @typedef
 * @name TSEGMENTIFY_CAMPAING_RESPONSE
 * @description
 * TSEGMENTIFY_CAMPAING_RESPONSE is a type that describes the response of the Segmentify API.
 * @property {Array<any[]>} search The search array of the response.
 * @property {Array<any[]>} campaigns The campaigns array of the response.
 * @property {Array<any[]>} coupons The coupons array of the response.
 * @property {Array<any[]>} experiments The experiments array of the response.
 * @property {Array<any[]>} responses The responses array of the response.
 * @property {typeof API_ERROR_ENUMS & { SUCCESS: 'SUCCESS' }} statusCode The statusCode of the response.
 * @property {number} timestamp The timestamp of the response.
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

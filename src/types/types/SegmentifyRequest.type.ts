import type { TSEGMENTIFY_EVENTS, TSUPPORTED_LANGUAGES, TCURRENCY } from '.';

/**
 * @typedef
 * @name SEGMENTIFY_REQUEST_TYPE
 * @description SEGMENTIFY_REQUEST_TYPE is a type that represents the request body for Segmentify API.
 * It is a json array of Segmentify events.
 * Each event has a name, userId and sessionId parameters.
 * You can check the required and optional parameters for each event from SEGMENTIFY_EVENT_PARAMS constant.
 * You can check the possible event names from SEGMENTIFY_EVENT_ENUMS constant.
 * @property {TSEGMENTIFY_EVENTS} name
 * @property {string} userId
 * @property {string} sessionId
 * @property {TSUPPORTED_LANGUAGES | string} [lang]
 * @property {string} [region]
 * @property {TCURRENCY | string} [currency]
 * @property {string} [pageUrl]
 * @property {boolean} [testMode]
 * @type {SEGMENTIFY_REQUEST_TYPE}
 * @example
 * {
 *  "name": "PAGE_VIEW",
 *  "userId": "123456789",
 *  "sessionId": "123456789",
 *  "lang": "en",
 *  "region": "US",
 *  "currency": "USD",
 *  "pageUrl": "https://www.segmentify.com",
 *  "testMode": true
 * }
 */

export type SEGMENTIFY_REQUEST_TYPE = {
  name: TSEGMENTIFY_EVENTS;
  userId: string;
  sessionId: string;
  lang?: TSUPPORTED_LANGUAGES | string;
  region?: string;
  currency?: TCURRENCY | string;
  pageUrl?: string;
  testMode?: boolean;
};

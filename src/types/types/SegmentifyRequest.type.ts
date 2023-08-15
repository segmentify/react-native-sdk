import type { TSEGMENTIFY_EVENTS, TSUPPORTED_LANGUAGES, TCURRENCY } from '.';

/**
 * @typedef
 * @name SEGMENTIFY_REQUEST_TYPE
 * @description SEGMENTIFY_REQUEST_TYPE is a type that represents the request body for Segmentify API.
 * It is a json array of Segmentify events.
 * Each event has a name, userId and sessionId parameters.
 * You can check the required and optional parameters for each event from SEGMENTIFY_EVENT_PARAMS constant.
 * You can check the possible event names from SEGMENTIFY_EVENT_ENUMS constant.
 *  {@link TSEGMENTIFY_EVENTS}
 * {@link TCURRENCY}
 * {@link TSUPPORTED_LANGUAGES}
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
  /**
   * The name of the event.
   */
  name: TSEGMENTIFY_EVENTS;
  /**
   * The user id of the event.
   */
  userId: string;
  /**
   * The session id of the event.
   */
  sessionId: string;
  /**
   * The language of the payload.
   */
  lang?: TSUPPORTED_LANGUAGES | string;
  /**
   * The region of the payload.
   */
  region?: string;
  /**
   * The currency of integration.
   */
  currency?: TCURRENCY | string;
  /**
   * The page url of the payload.
   */
  pageUrl?: string;
  /**
   * The test mode.
   */
  testMode?: boolean;
};

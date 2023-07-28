import type { TSEGMENTIFY_EVENTS, TSUPPORTED_LANGUAGES, TCURRENCY } from '.';

/**
 * SEGMENTIFY_REQUEST_TYPE
 * @description
 * SEGMENTIFY_REQUEST_TYPE is a type that represents the request body for Segmentify API.
 * It is a json array of Segmentify events.
 * Each event has a name, userId and sessionId parameters.
 * You can check the required and optional parameters for each event from SEGMENTIFY_EVENT_PARAMS constant.
 * You can check the possible event names from SEGMENTIFY_EVENT_ENUMS constant.
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

/**
 * @enum API_ERROR_ENUMS
 * @description
 * API_ERROR_ENUMS is an enum that describes the possible errors of the Segmentify API.
 * @property {string} NO_API_KEY Your request doesn't have an apiKey parameter, please provide apiKey parameter at the request with your account's unique api key.
 * @property {string} NO_ACCOUNT  Given api key is not associated with a Segmentify account, please check your api key value.
 * @property {string} UNVERIFIED_ACCOUNT Account associated with api key is not a verified account. To verify your account, please check your email and verify it.
 * @property {string} FAILED_ACCOUNT Account associated with api key is not an active account. Please contact with support team to re-activate your account.
 * @property {string} NO_DOMAIN_APIKEY_MATCH Each Segmentify account is associated with a domain. Please check your domain and provide at requests with header Origin. Check Reqeust Details for required headers.
 * @property {string} NO_EVENT There is no events inside request body. You should add at least one event with each request.
 * @property {string} NO_USERID Each Segmentify event should have an userId parameter, and at least one event in the request lacks this parameter.
 * @property {string} NO_SESSIONID Each Segmentify event should have an sessionId parameter, and at least one event in the request lacks this parameter.
 * @property {string} BAD_INPUT Your request body should be a json array of Segmentify events. It is malformed, please check your json object for validity.
 */
export const API_ERROR_ENUMS = {
  NO_API_KEY: 'NO_API_KEY',
  NO_ACCOUNT: 'NO_ACCOUNT',
  UNVERIFIED_ACCOUNT: 'UNVERIFIED_ACCOUNT',
  FAILED_ACCOUNT: 'FAILED_ACCOUNT',
  NO_DOMAIN_APIKEY_MATCH: 'NO_DOMAIN_APIKEY_MATCH',
  NO_EVENT: 'NO_EVENT',
  NO_USERID: 'NO_USERID',
  NO_SESSIONID: 'NO_SESSIONID',
  BAD_INPUT: 'BAD_INPUT',
} as const;

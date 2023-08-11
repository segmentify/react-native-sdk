import type { AxiosResponse } from 'axios';
import type { SEGMENTIFY_EVENTS } from '../enums';
import type { TFireBasePushResponse } from './FireBasePushResponse';

export type TEventTypes = keyof typeof SEGMENTIFY_EVENTS;
export type TRequiredFieldCount = number;

/**
 * @typedef
 * @name RequestCredentialsResponse
 * @description RequestCredentialsResponse type is used to define the type of the request credentials response.
 * @type {RequestCredentialsResponse}
 * @example
 * [
 *  "123456789",
 *  "987654321"
 * ]
 */
export type RequestCredentialsResponse = Promise<AxiosResponse<Array<string>>>;

/**
 * @typedef
 * @name RequestPushNotificationPermissionResponseBody
 * @description RequestPushNotificationPermissionResponseBody type is used to define the type of the request push notification permission response body.
 * @property {string} deviceToken - Device token
 * @property {string} os - Operating system
 * @property {string} providerType - Provider type
 * @property {string} userId - User id
 * @type {RequestPushNotificationPermissionResponseBody}
 * @returns {Promise<AxiosResponse<RequestPushNotificationPermissionResponseBody>>}
 * @example
 * {
 *  deviceToken: "123456789",
 *  os: "IOS",
 *  providerType: "FIREBASE",
 *  userId: "987654321"
 * }
 */
export type RequestPushNotificationPermissionResponseBody = {
  deviceToken: string;
  os: string;
  providerType: string;
  userId: string;
};

/**
 * @typedef
 * @name RequestPushNotificationPermissionResponse
 * @description RequestPushNotificationPermissionResponse type is used to define the type of the request push notification permission response.
 * @type {RequestPushNotificationPermissionResponse}
 * @returns {Promise<AxiosResponse<RequestPushNotificationPermissionResponseBody>>}
 */
export type RequestPushNotificationPermissionResponse = Promise<
  AxiosResponse<RequestPushNotificationPermissionResponseBody>
>;

/**
 * @typedef
 * @name FirePushNotificationInteractionResponse
 * @description FirePushNotificationInteractionResponse type is used to define the type of the fire push notification interaction response.
 * @type {FirePushNotificationInteractionResponse}
 * @returns {Promise<AxiosResponse<TFireBasePushResponse>>}
 */
export type FirePushNotificationInteractionResponse = Promise<
  AxiosResponse<TFireBasePushResponse>
>;

/**
 * @typedef
 * @name FirePushNotificationInteractionPayload
 * @description FirePushNotificationInteractionPayload type is used to define the type of the fire push notification interaction payload.
 * @type {FirePushNotificationInteractionPayload}
 * @example
 * {
 *  userId: "123456789",
 *  deviceToken: "987654321",
 * }
 */
export type TCredentialsPayload = {
  userId: string;
  sessionId: string;
};

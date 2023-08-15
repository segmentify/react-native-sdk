import type { AxiosResponse } from 'axios';
import type { SEGMENTIFY_EVENTS } from '../enums';
import type { TFireBasePushResponse } from './FireBasePushResponse';

export type TEventTypes = keyof typeof SEGMENTIFY_EVENTS;
export type TRequiredFieldCount = number;

/**
 * @memberof module:EventManager
 * @typedef
 * @name RequestCredentialsResponse
 * @description RequestCredentialsResponse type is used to define the type of the request credentials response.
 * @returns {Promise<AxiosResponse<Array<string>>>}
 * @example
 * [
 *  "123456789",
 *  "987654321"
 * ]
 */
export type RequestCredentialsResponse = Promise<AxiosResponse<Array<string>>>;

/**
 * @memberof module:EventManager
 * @typedef
 * @name RequestPushNotificationPermissionResponseBody
 * @description RequestPushNotificationPermissionResponseBody type is used to define the type of the request push notification permission response body.
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
  /**
   * Device token is unique for each device.
   */
  deviceToken: string;
  /**
   * OS is the operating system of the device.
   */
  os: string;
  /**
   * Provider type is the push notification provider type.
   */
  providerType: string;
  /**
   * User id is the unique id of the user.
   */
  userId: string;
};

/**
 * @memberof module:EventManager
 * @typedef
 * @name RequestPushNotificationPermissionResponse
 * @description RequestPushNotificationPermissionResponse type is used to define the type of the request push notification permission response.
 * @returns {Promise<AxiosResponse<RequestPushNotificationPermissionResponseBody>>}
 */
export type RequestPushNotificationPermissionResponse = Promise<
  AxiosResponse<RequestPushNotificationPermissionResponseBody>
>;

/**
 * @memberof module:EventManager
 * @typedef
 * @name FirePushNotificationInteractionResponse
 * @description FirePushNotificationInteractionResponse type is used to define the type of the fire push notification interaction response.
 * @returns {Promise<AxiosResponse<TFireBasePushResponse>>}
 */
export type FirePushNotificationInteractionResponse = Promise<
  AxiosResponse<TFireBasePushResponse>
>;

/**
 * @memberof module:EventManager
 * @typedef
 * @name FirePushNotificationInteractionPayload
 * @description FirePushNotificationInteractionPayload type is used to define the type of the fire push notification interaction payload.
 * @returns {Promise<AxiosResponse<TFireBasePushResponse>>}
 * @example
 * {
 *  userId: "123456789",
 *  deviceToken: "987654321",
 * }
 */
export type TCredentialsPayload = {
  /**
   * User id is the unique id of the user.
   */
  userId: string;
  /**
   * Device token is unique for each device.
   */
  sessionId: string;
};

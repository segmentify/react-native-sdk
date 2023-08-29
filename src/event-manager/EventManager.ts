import { Platform } from 'react-native';
import { apiGetAway } from '../utils';
import {
  getApiKey,
  getApiKeyWithBaseUrl,
  getDataCenterPushUrl,
  getDeviceInformation,
  getConfiguration,
  getDataCenterUrl,
  getUser,
} from './utils';
import {
  GET_APP_INITIAL_CREDENTIALS_URL,
  SEND_EVENTS_URL,
  SEND_PUSH_NOTIFICATION_INTERACTION_URL,
  SEND_PUSH_NOTIFICATION_URL,
  SEGMENTIFY_EVENT_PARAMS,
} from '../constants';

import type {
  TRequestPushNotificationPermission,
  TFirePushNotification,
  TRequestPushNotificationPermissionPayload,
  TFirePushNotificationInteraction,
  TRequiredFieldCount,
  TEventTypes,
  RequestCredentialsResponse,
  RequestPushNotificationPermissionResponse,
  FirePushNotificationInteractionResponse,
} from '../types';

import type {
  GenericSegmentifyEventPayload,
  KEYS_OF_EVENTS,
} from '../types/interfaces/segmentify-events/EventsPayloads.interface';

/**
 * @memberof module:EventManager
 * @function
 * @name RequestCredentials
 * @description
 * RequestCredentials is a function that is used to get the required credentials from Segmentify API.
 * It takes requiredFields as parameter.
 * requiredFields is the number of required credentials.
 * It returns a promise that resolves to the required credentials.
 * @param {TRequiredFieldCount} requiredFields
 * @returns {RequestCredentialsResponse}
 */

export const RequestCredentials = async ({
  requiredFields,
}: {
  requiredFields?: TRequiredFieldCount;
}): RequestCredentialsResponse => {
  const dataCenterUrl = await getDataCenterUrl();

  if (!dataCenterUrl || dataCenterUrl === '')
    throw new Error('Data center url is not defined');

  const count = `?count=${requiredFields}`;

  const data = await apiGetAway.get(
    `${dataCenterUrl}${GET_APP_INITIAL_CREDENTIALS_URL}${count}`
  );

  return data;
};

/**
 * @memberof module:EventManager
 * @function
 * @name FireEvent
 * @description
 * FireEvent is a function that is used to send events to Segmentify API.
 * It takes type and eventPayload as parameters.
 * type is the type of the event.
 * eventPayload is the payload of the event.
 * It returns a promise that resolves to the response of the API.
 * @param {TEventTypes} type
 * @param {GenericSegmentifyEventPayload<T>} eventPayload
 * @returns {Promise<any>}
 * @throws {Error}
 */

export const FireEvent = async <T extends KEYS_OF_EVENTS>({
  type,
  eventPayload,
}: {
  type: TEventTypes;
  eventPayload: GenericSegmentifyEventPayload<T> | any;
}) => {
  const eventType = eventPayload?.name;
  if (type === eventType) {
    const requiredParams = SEGMENTIFY_EVENT_PARAMS[type]!.requiredParams;
    const optionalParams = SEGMENTIFY_EVENT_PARAMS[type]!.optionalParams;

    requiredParams?.forEach((param) => {
      if (!eventPayload[param]) {
        throw new Error(`${param} is required for ${type} event`);
      }
    });

    optionalParams?.forEach((param) => {
      if (!eventPayload[param]) {
        delete eventPayload[param];
      }
    });

    const { apiKey, dataCenterUrl } = await getApiKeyWithBaseUrl();

    const { data } = await apiGetAway.post(
      `${dataCenterUrl}${SEND_EVENTS_URL}?apiKey=${apiKey}`,
      eventPayload
    );

    return data;
  }

  throw new Error('Event type and event payload name does not match');
};

/**
 * @memberof module:EventManager
 * @function
 * @name RequestPushNotificationPermission
 * @description
 * RequestPushNotificationPermission is a function that is used to request permission for push notifications.
 * It takes deviceToken and userId as parameters.
 * deviceToken is the token of the device.
 * userId is the id of the user.
 * It returns a promise that resolves to the response of the API.
 * @param {TRequestPushNotificationPermission} deviceToken
 * @returns {RequestPushNotificationPermissionResponse}
 * @throws {Error}
 */

export const RequestPushNotificationPermission = async ({
  deviceToken,
  userId,
}: TRequestPushNotificationPermission): RequestPushNotificationPermissionResponse => {
  const apiKey = await getApiKey();
  const dataCenterPushUrl = await getDataCenterPushUrl();
  const { deviceType } = await getDeviceInformation();

  const { isApnsEnabled } = await getConfiguration();

  let data: TRequestPushNotificationPermissionPayload = {
    providerType: 'FIREBASE',
    deviceToken,
    userId,
    os: deviceType,
  };

  if (Platform.OS === 'ios' && isApnsEnabled) {
    data.providerType = 'APNS';
    data.os = deviceType;
  }

  return await apiGetAway.post(
    `${dataCenterPushUrl}${SEND_PUSH_NOTIFICATION_URL}?apiKey=${apiKey}`,
    data
  );
};

/**
 * @memberof module:EventManager
 * @function
 * @name FirePushNotification
 * @description
 * FirePushNotification is a function that is used to send push notifications to Segmentify API.
 * It takes deviceToken, type, instanceId and productId as parameters.
 * @param {TFirePushNotification} deviceToken
 * @returns {Promise<void>}
 * @throws {Error}
 */

export const FirePushNotification = async ({
  deviceToken,
  type,
  instanceId,
  productId,
}: TFirePushNotification) => {
  const apiKey = await getApiKey();
  const dataCenterPushUrl = await getDataCenterPushUrl();

  return await apiGetAway.post(
    `${dataCenterPushUrl}${SEND_PUSH_NOTIFICATION_URL}?apiKey=${apiKey}`,
    {
      deviceToken,
      type,
      instanceId,
      productId,
    }
  );
};

/**
 * @memberof module:EventManager
 * @function
 * @name FirePushNotificationInteraction
 * @description
 * FirePushNotificationInteraction is a function that is used to send push notification interactions to Segmentify API.
 * It takes instanceId and type as parameters.
 * instanceId is the id of the instance.
 * type is the type of the interaction.
 * It returns a promise that resolves to the response of the API.
 * @param {TFirePushNotificationInteraction} instanceId
 * @returns {FirePushNotificationInteractionResponse}
 * @throws {Error}
 */

export const FirePushNotificationInteraction = async ({
  instanceId,
  type,
}: TFirePushNotificationInteraction): FirePushNotificationInteractionResponse => {
  const apiKey = await getApiKey();
  const dataCenterPushUrl = await getDataCenterPushUrl();
  const user = await getUser();

  let data = {
    instanceId,
    userId: user?.id,
    os:
      Platform.OS === 'ios'
        ? Platform.OS.toUpperCase()
        : Platform.OS === 'android'
        ? Platform.OS.toUpperCase()
        : null,
    type,
  };

  return await apiGetAway.post(
    `${dataCenterPushUrl}${SEND_PUSH_NOTIFICATION_INTERACTION_URL}?apiKey=${apiKey}`,
    data
  );
};

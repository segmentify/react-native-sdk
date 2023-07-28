import type { AxiosResponse } from 'axios';
import type { SEGMENTIFY_EVENTS } from '../enums';
import type { TFireBasePushResponse } from './firebase-push-response.type';

export type TEventTypes = keyof typeof SEGMENTIFY_EVENTS;
export type TRequiredFieldCount = number;

export type RequestCredentialsResponse = Promise<AxiosResponse<Array<string>>>;

export type RequestPushNotificationPermissionResponseBody = {
  deviceToken: string;
  os: string;
  providerType: string;
  userId: string;
};

export type RequestPushNotificationPermissionResponse = Promise<
  AxiosResponse<RequestPushNotificationPermissionResponseBody>
>;

export type FirePushNotificationInteractionResponse = Promise<
  AxiosResponse<TFireBasePushResponse>
>;

export type TCredentialsPayload = {
  userId: string;
  sessionId: string;
};

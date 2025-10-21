/**
 * @packageDocumentation
 * @module SegmentifyNative
 */

export { useSegmentifyStorage } from './context/SegmentifyNativeContext';
export { default as SegmentifyNativeProvider } from './context/SegmentifyNativeContext';

export {
  RequestCredentials,
  FireEvent,
  RequestPushNotificationPermission,
  InitializePushService,
  HandleInitialNotification,
  HandlePlatformSpecificPushFlow,
} from './event-manager';

export type {
  APIErrorType,
  SEGMENTIFY_REQUEST_TYPE,
  TSEGMENTIFY_EVENTS,
  TSUPPORTED_LANGUAGES,
  TCURRENCY,
  TEventTypes,
  TRequiredFieldCount,
  RequestCredentialsResponse,
  RequestPushNotificationPermissionResponse,
  FirePushNotificationInteractionResponse,
  ResponseStatusCodeType,
  TCredentialsPayload,
  TRequestPushNotificationPermission,
  TFirePushNotification,
  TRequestPushNotificationPermissionPayload,
  TFirePushNotificationInteraction,
  TNotificationConfigs,
  PageView,
  ProductView,
  BasketOperations,
  CheckOut,
  UserOperations,
  Custom,
  Interaction,
  Search,
} from './types';

/**
 * @module EventManager
 * @description EventManager is a module that handles all the events in the app.
 *
 * @example
 *
 * FireEvent - RequestCredentials - RequestPushNotificationPermission - HandleInitialNotification - InitializePushService
 */

export {
  RequestCredentials,
  FireEvent,
  RequestPushNotificationPermission,
} from './EventManager';

export {
  HandleInitialNotification,
  InitializePushService,
} from './push-manager';

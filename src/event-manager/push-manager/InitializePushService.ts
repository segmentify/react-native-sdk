import { HandlePushInteraction } from './handlers/HandlePushInteraction';
import { HandleBackGroundNotification } from './handlers/HandleBackGroundNotification';
import { HandleForeGroundNotification } from './handlers/HandleForeGroundNotification';

import type { Messaging } from '../../types/types/handlers.type';
import { type Notification } from '@notifee/react-native';

/**
 * @memberof module:EventManager
 * @function
 * @name InitializePushService
 * @description
 * InitializePushService is a function that initializes the push service.
 * It takes a messaging object as a parameter.
 * @param {Messaging} messaging
 * @returns {void}
 */

export const InitializePushService = (
  messaging: Messaging,
  manuelSetup = false,
  pushDisplaySetup?: {
    android: Notification['android'];
    ios: Notification['ios'];
  }
) => {
  HandleForeGroundNotification(messaging, pushDisplaySetup);
  if (!manuelSetup) HandleBackGroundNotification(messaging);
  HandlePushInteraction();
};

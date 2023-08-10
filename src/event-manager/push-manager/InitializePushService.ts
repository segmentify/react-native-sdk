import { HandlePushInteraction } from './handlers/HandlePushInteraction';
import { HandleBackGroundNotification } from './handlers/HandleBackGroundNotification';
import { HandleForeGroundNotification } from './handlers/HandleForeGroundNotification';

import type { Messaging } from './handlers/types';

/**
 * @typedef
 * @name InitializePushService
 * @description
 * InitializePushService is a function that initializes the push service.
 * It takes a messaging object as a parameter.
 * @param {Messaging} messaging
 * @returns {void}
 */

export const InitializePushService = (messaging: Messaging) => {
  HandleForeGroundNotification(messaging);
  HandleBackGroundNotification(messaging);
  HandlePushInteraction();
};

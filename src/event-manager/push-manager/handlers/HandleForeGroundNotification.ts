import notifee, { type Notification } from '@notifee/react-native';
import { DisplayNotification } from '../DisplayNotification';
import { HandleUserInteraction } from './HandleUserInteraction';

import type { TFireBasePushResponse, Messaging } from '../../../types';

/**
 * @memberof module:EventManager
 * @function
 * @name HandleForeGroundNotification
 * @description
 * HandleForeGroundNotification is a function that handles the foreground notification.
 * It takes a messaging object as a parameter.
 * @param {Messaging} messaging
 * @returns {void}
 */
export const HandleForeGroundNotification = (
  messaging: Messaging,
  pushDisplaySetup: {
    android: Notification['android'];
    ios: Notification['ios'];
  } = {
    android: undefined,
    ios: undefined,
  }
) => {
  messaging().onMessage((response: TFireBasePushResponse) => {
    DisplayNotification(response.data, pushDisplaySetup);
  });

  notifee.onForegroundEvent(async ({ type, detail }) => {
    HandleUserInteraction({ type, detail });
  });
};

import { Platform } from 'react-native';
import notifee from '@notifee/react-native';
import { DisplayNotification } from '../DisplayNotification';
import { HandleUserInteraction } from './HandleUserInteraction';

import type { TFireBasePushResponse } from '../../../types';
import type { Messaging, PushNotificationConfigType } from './types';

/**
 * @typedef
 * @name HandleForeGroundNotification
 * @description
 * HandleForeGroundNotification is a function that handles the foreground notification.
 * It takes a messaging object as a parameter.
 * @param {Messaging} messaging
 * @returns {void}
 */
export const HandleForeGroundNotification = (
  messaging: Messaging,
  pushNotificationConfig = {} as PushNotificationConfigType
) => {
  messaging().onMessage((response: TFireBasePushResponse) => {
    DisplayNotification(
      response.data,
      Platform.OS === 'android'
        ? { android: pushNotificationConfig?.android }
        : { ios: pushNotificationConfig?.ios }
    );
  });

  notifee.onForegroundEvent(async ({ type, detail }) => {
    HandleUserInteraction({ type, detail });
  });
};

import { Platform } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { CHANNEL_ID, PRESS_ACTION_ID, LAUNCH_ACTIVITY } from '../../constants';

import type { Notification } from '@notifee/react-native';
import { AndroidStyle } from '@notifee/react-native';

/**
 * @memberof module:EventManager
 * @function
 * @name DisplayNotification
 * @description
 * DisplayNotification is a function that displays a notification on the device.
 * It takes a notification object as a parameter.
 * You can check the possible parameters from Notification type.
 * You can check the possible notification parameters from Segmentify API documentation.
 * It returns a promise that resolves to a Notification object.
 * You can check the possible Notification object parameters from Segmentify API documentation.
 * @param {Notification} notification
 * @param {Object} options
 * @param {Notification.android} options.android
 * @param {Notification.ios} options.ios
 * @returns {Promise<string>}
 */

export const DisplayNotification = async (
  notification: Notification,
  {
    android,
    ios,
  }: {
    android?: Notification['android'];
    ios?: Notification['ios'];
  } = {}
) => {
  let androidNotification: Notification;

  if (Platform.OS === 'android') {
    androidNotification = {
      ...notification,
      android: {
        ...notification,
        channelId: CHANNEL_ID,
        importance: AndroidImportance.HIGH,
        smallIcon: 'ic_launcher',
        showTimestamp: true,
        timestamp: Date.now(),
        style: {
          type: AndroidStyle.BIGPICTURE,
          // @ts-expect-error 'type' exists value is 0 for BIGPICTURE
          picture: notification.image ? notification.image : '',
        },
        pressAction: {
          id: PRESS_ACTION_ID,
          launchActivity: LAUNCH_ACTIVITY,
        },
        ...(android || {}),
      },
      data: {
        ...notification,
      },
    };

    return await notifee.displayNotification(androidNotification);
  }

  const iosNotification = {
    ...notification,
    ios: {
      ...notification.ios,
      showTimestamp: true,
      timestamp: Date.now(),
      ...(ios || {}),
    },
    data: {
      ...notification,
    },
  };

  return await notifee.displayNotification(iosNotification);
};

import { Platform } from 'react-native';
import notifee, {
  AndroidImportance,
  AndroidStyle,
} from '@notifee/react-native';
import { CHANNEL_ID, PRESS_ACTION_ID, LAUNCH_ACTIVITY } from '../../constants';

import type { Notification } from '@notifee/react-native';

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
  pushDisplaySetup: {
    android: Notification['android'];
    ios: Notification['ios'];
  } = {
    android: undefined,
    ios: undefined,
  }
) => {
  let androidNotification: Notification;

  if (Platform.OS === 'android') {
    androidNotification = {
      ...notification,
      title: notification.title,
      //@ts-expect-error android property exists
      subtitle: notification.message,
      //@ts-expect-error android property exists
      body: notification.message,
      android: {
        channelId: CHANNEL_ID,
        importance: AndroidImportance.HIGH,
        smallIcon: 'ic_launcher',
        showTimestamp: true,
        timestamp: Date.now(),
        style: {
          type: AndroidStyle.BIGPICTURE,
          // @ts-expect-error picture property exists
          picture: notification.image ?? '',
        },
        pressAction: {
          id: PRESS_ACTION_ID,
          launchActivity: LAUNCH_ACTIVITY,
        },
        ...(pushDisplaySetup.android ?? {}),
      },
    };

    return await notifee.displayNotification(androidNotification);
  }

  const iosNotification = {
    ...notification,
    title: notification.title,
    //@ts-expect-error ios property exists
    subtitle: notification.message,
    //@ts-expect-error ios property exists
    body: notification.message,
    ios: {
      showTimestamp: true,
      timestamp: Date.now(),
      attachments: [
        {
          // @ts-expect-error image property exists
          url: notification?.image,
        },
      ],
      ...(pushDisplaySetup.ios ?? {}),
    },
    data: {
      ...notification,
    },
  };

  return await notifee.displayNotification(iosNotification);
};

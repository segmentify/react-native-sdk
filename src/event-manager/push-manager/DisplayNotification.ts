import { Platform } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { CHANNEL_ID } from '../../constants';

import type { Notification } from '@notifee/react-native';

/**
 * DisplayNotification
 * @description
 * DisplayNotification is a function that displays a notification on the device.
 * It takes a notification object as a parameter.
 * You can check the possible parameters from Notification type.
 * You can check the possible notification parameters from Segmentify API documentation.
 * It returns a promise that resolves to a Notification object.
 * You can check the possible Notification object parameters from Segmentify API documentation.
 * @param notification
 * @param android
 * @param ios
 * @returns Promise<Notification>
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
        ...notification.android,
        channelId: CHANNEL_ID,
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
          launchActivity: 'default',
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
      ...(ios || {}),
    },
    data: {
      ...notification,
    },
  };

  return await notifee.displayNotification(iosNotification);
};

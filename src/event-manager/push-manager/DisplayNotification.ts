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

export const DisplayNotification = async (notification: Notification) => {
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
          // @ts-expect-error picture property exists
          picture: notification.image ?? '',
        },
        pressAction: {
          id: PRESS_ACTION_ID,
          launchActivity: LAUNCH_ACTIVITY,
        },
      },
      data: {
        ...notification,
      },
    };

    return await notifee.displayNotification(androidNotification);
  }

  const iosNotification = {
    ...notification.data,
    ios: {
      showTimestamp: true,
      timestamp: Date.now(),
      attachments: [
        {
          url: notification?.data?.image,
        },
      ],
    },
    data: {
      ...notification,
    },
  };

  // @ts-expect-error ios property exists
  return await notifee.displayNotification(iosNotification);
};

//  {"apiKey": "0108b006-c136-460e-be1e-286bcfa9affc", "dataCenterUrl": "https://psh2.segmentify.com/", "image": "https://ltbjeans-hybris-p1.mncdn.com/mnresize/790/1059/media/products/0122546025250010000_14020_01.jpg", "instanceId": "psh_dbe5480aac000", "message": "New Wanda Düz Paça Rahat Kesim Jean Pantolon 1.169,99 TL", "redirectUrl": "https://www.ltbjeans.com/tr-TR/p/new-wanda-duz-paca-rahat-kesim-jean-pantolon-010095186016117_55998?utm_source=segmentify&utm_campaign=psh_dbe5480aac000&utm_content=010095186016117_55998&utm_medium=push", "title": "Test Mobile"}

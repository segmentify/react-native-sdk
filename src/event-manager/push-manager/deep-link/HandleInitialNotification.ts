import { Linking } from 'react-native';
import notifee from '@notifee/react-native';

/**
 * @memberof module:EventManager
 * @function
 * @name HandleInitialNotification
 * @description
 * HandleInitialNotification is a function that handles the initial notification. It returns the url of the notification.
 * @returns {Promise<string | null>}
 */

export const HandleInitialNotification = async () => {
  const url = await Linking.getInitialURL();

  if (url != null) return url;

  const initialNotification = await notifee.getInitialNotification();

  return initialNotification?.notification?.data?.link;
};

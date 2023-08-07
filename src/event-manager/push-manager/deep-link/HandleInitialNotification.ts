import { Linking } from 'react-native';
import notifee from '@notifee/react-native';

export const HandleInitialNotification = async () => {
  const url = await Linking.getInitialURL();

  if (url != null) return url;

  const initialNotification = await notifee.getInitialNotification();

  return initialNotification?.notification?.data?.link;
};

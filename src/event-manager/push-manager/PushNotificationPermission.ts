import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { getStorageItem } from '../../utils';
import { HandlePlatformSpecificPushFlow } from './HandlePlatformSpecificPushFlow';

import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import type {
  NotificationAndroid,
  NotificationIOS,
} from '@notifee/react-native';

/**
 * PushNotificationPermission
 * @description
 * PushNotificationPermission is a function that requests permission for push notifications.
 * It takes messaging and pushNotificationConfig parameters.
 * messaging is the FirebaseMessaging object.
 * pushNotificationConfig is the push notification configuration object.
 * @param messaging
 * @param pushNotificationConfig
 * @returns Promise<void>
 */

export const PushNotificationPermission = async ({
  messaging,
  pushNotificationConfig,
}: {
  messaging:
    | FirebaseMessagingTypes.Statics
    | FirebaseMessagingTypes.Module
    | any;
  pushNotificationConfig?: {
    android: NotificationAndroid;
    ios: NotificationIOS;
  };
}) => {
  const user = await getStorageItem({ key: 'user' });

  if (Platform.OS === 'ios') {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await HandlePlatformSpecificPushFlow({
        messaging,
        pushNotificationConfig,
        user,
      });
    }

    if (authStatus === messaging.AuthorizationStatus.DENIED) {
      console.log('Authorization status:', authStatus);
      // Denial Logic
    }
  }

  if (Platform.OS === 'android') {
    const authStatus = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS!
    );

    if (authStatus === PermissionsAndroid.RESULTS.GRANTED) {
      await HandlePlatformSpecificPushFlow({
        messaging,
        pushNotificationConfig,
        user,
      });
    }

    if (authStatus === PermissionsAndroid.RESULTS.DENIED) {
      console.log('Authorization status:', authStatus);
      // Denial Logic
    }
  }
};

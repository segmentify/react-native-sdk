import { Platform } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { CHANNEL_ID, CHANNEL_NAME } from '../../../constants';
import { RequestPushNotificationPermission } from '../../EventManager';

import type { TCredentialsPayload } from '../../../types';
import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

/**
 * HandlePlatformSpecificPushFlow
 * @description
 * HandlePlatformSpecificPushFlow is a function that handles the push notification flow for both Android and iOS.
 * It takes messaging, pushNotificationConfig and user parameters.
 * messaging is the FirebaseMessaging object.
 * pushNotificationConfig is the push notification configuration object.
 * user is the user object.
 * @param messaging
 * @param pushNotificationConfig
 * @param user
 * @returns Promise<void>
 */

export const HandlePlatformSpecificPushFlow = async ({
  messaging,
  user,
}: {
  messaging:
    | FirebaseMessagingTypes.Statics
    | FirebaseMessagingTypes.Module
    | any;
  user?: TCredentialsPayload;
}) => {
  // Get the token
  const deviceToken = await messaging().getToken();
  // Save the token
  await RequestPushNotificationPermission({
    deviceToken,
    userId: user!.userId,
  });

  if (Platform.OS === 'android') {
    //create channel
    await notifee.createChannel({
      id: CHANNEL_ID,
      name: CHANNEL_NAME,
      importance: AndroidImportance.HIGH,
    });
  }
};

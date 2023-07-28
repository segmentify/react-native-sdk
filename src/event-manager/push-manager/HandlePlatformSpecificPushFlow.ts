import { Platform } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { DisplayNotification } from './DisplayNotification';
import { HandleUserInteraction } from './HandleUserInteraction';
import { CHANNEL_ID, CHANNEL_NAME } from '../../constants';
import { RequestPushNotificationPermission } from '../EventManager';

import type { TFireBasePushResponse, TCredentialsPayload } from '../../types';
import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import type {
  NotificationAndroid,
  NotificationIOS,
} from '@notifee/react-native';

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
  pushNotificationConfig,
  user,
}: {
  messaging:
    | FirebaseMessagingTypes.Statics
    | FirebaseMessagingTypes.Module
    | any;
  pushNotificationConfig?: {
    android: NotificationAndroid;
    ios: NotificationIOS;
  };
  user?: TCredentialsPayload;
}) => {
  // Get the token
  const deviceToken = await messaging().getToken();
  // Save the token
  await RequestPushNotificationPermission({
    deviceToken,
    userId: user!.userId,
  }).catch((error) => {
    console.log(error);
  });

  //create channel
  if (Platform.OS === 'android') {
    await notifee.createChannel({
      id: CHANNEL_ID,
      name: CHANNEL_NAME,
      importance: AndroidImportance.HIGH,
    });
  }

  // Listen the messages
  messaging().onMessage((response: TFireBasePushResponse) => {
    console.log(JSON.stringify(response));
    DisplayNotification(
      response.data,
      Platform.OS === 'android'
        ? { android: pushNotificationConfig?.android }
        : { ios: pushNotificationConfig?.ios }
    );
  });

  // When the application is in a background or quit state, the onMessage handler will not be called when receiving messages. Instead, you need to setup a background callback handler via the setBackgroundMessageHandler method.
  messaging().setBackgroundMessageHandler((response: TFireBasePushResponse) => {
    console.log(JSON.stringify(response));
    DisplayNotification(
      response.data,
      Platform.OS === 'android'
        ? { android: pushNotificationConfig?.android }
        : { ios: pushNotificationConfig?.ios }
    );
  });

  //Listen Foreground events  and handle them
  notifee.onForegroundEvent(async ({ type, detail }) => {
    HandleUserInteraction({ type, detail });
  });

  // Listen Background events  and handle them
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    HandleUserInteraction({ type, detail });
  });
};

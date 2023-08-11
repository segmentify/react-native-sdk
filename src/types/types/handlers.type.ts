import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import type { Notification } from '@notifee/react-native';

export type NotificationAndroid = Notification['android'];
export type NotificationIOS = Notification['ios'];
export type Messaging =
  | FirebaseMessagingTypes.Statics
  | FirebaseMessagingTypes.Module
  | any;
export type PushNotificationConfigType = {
  android: NotificationAndroid;
  ios: NotificationIOS;
};

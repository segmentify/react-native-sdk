import {Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {
  RequestPushNotificationPermission,
  getUserInformation,
} from 'segmentify-react-native';

export const RequestUserPermissionForPushNotification = async () => {
  const user = await getUserInformation();
  if (Platform.OS === 'ios') {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();
      // Get the token
      const deviceToken = await messaging().getToken();
      // Save the token
      RequestPushNotificationPermission({
        deviceToken,
        userId: user?.userId,
      });
    }

    if (authStatus === messaging.AuthorizationStatus.DENIED) {
      console.log('Authorization status:', authStatus);
      // Denial Logic
    }
  }

  if (Platform.OS === 'android') {
    console.log('burada 1');
    const authStatus = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: 'Notifcation Permissions',
        message:
          'ExampleNativeApp needs to grant permission to show notifications',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('burada 2', authStatus);

    if (authStatus === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Authorization status:', authStatus);
      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();
      // Get the token
      const deviceToken = await messaging().getToken();
      // Save the token
      RequestPushNotificationPermission({
        deviceToken,
        userId: user?.userId,
      });
    }

    if (authStatus === PermissionsAndroid.RESULTS.DENIED) {
      console.log('Authorization status:', authStatus);
      // Denial Logic
    }
  }
};

import type { TFireBasePushResponse } from '../../../types';
import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import {
  HandleClickedNotification,
  HandleReceivedNotification,
} from '../utils';

export const HandleBackGroundNotification = (
  messaging:
    | FirebaseMessagingTypes.Statics
    | FirebaseMessagingTypes.Module
    | any
) => {
  messaging().setBackgroundMessageHandler(
    async (response: TFireBasePushResponse) => {
      const instanceId = response.data?.instanceId;
      if (instanceId) {
        HandleReceivedNotification({ instanceId: String(instanceId) });
      }
      return Promise.resolve();
    }
  );

  setTimeout(() => {
    messaging()
      .getInitialNotification()
      .then((remoteMessage: TFireBasePushResponse | null) => {
        if (remoteMessage?.data?.instanceId) {
          HandleClickedNotification({
            instanceId: String(remoteMessage.data.instanceId),
          });
        }
      });
  }, 500);
};

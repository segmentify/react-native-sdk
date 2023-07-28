import { DisplayNotification } from './DisplayNotification';

import type { TFireBasePushResponse } from '../../types';
import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export const HandleBackGroundNotification = (
  messaging:
    | FirebaseMessagingTypes.Statics
    | FirebaseMessagingTypes.Module
    | any
) => {
  messaging().setBackgroundMessageHandler((response: TFireBasePushResponse) => {
    return DisplayNotification(response.data);
  });
};

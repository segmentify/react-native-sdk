import { DisplayNotification } from '../DisplayNotification';

import type { TFireBasePushResponse } from '../../../types';
import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

/**
 * @memberof module:EventManager
 * @function
 * @name HandleBackGroundNotification
 * @description
 * HandleBackGroundNotification is a function that handles the background notification.
 * It takes a messaging object as a parameter.
 * @param {Messaging} messaging
 * @returns {void}
 */
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

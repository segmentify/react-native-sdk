import notifee from '@notifee/react-native';
import { HandleUserInteraction } from './HandleUserInteraction';

/**
 * @memberof module:EventManager
 * @function
 * @name HandlePushInteraction
 * @description
 * HandlePushInteraction is a function that handles the push interaction.
 * @returns {void}
 */
export const HandlePushInteraction = () => {
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    HandleUserInteraction({ type, detail });
  });
};

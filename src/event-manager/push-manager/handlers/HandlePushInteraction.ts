import notifee from '@notifee/react-native';
import { HandleUserInteraction } from './HandleUserInteraction';

export const HandlePushInteraction = () => {
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    HandleUserInteraction({ type, detail });
  });
};

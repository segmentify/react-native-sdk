/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {
  HandlePushInteraction,
  HandleBackGroundNotification,
} from '@segmentify/react-native-sdk';
import {name as appName} from './app.json';

HandleBackGroundNotification(messaging);
HandlePushInteraction();

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return <App />;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);

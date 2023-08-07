import { HandlePushInteraction } from './handlers/HandlePushInteraction';
import { HandleBackGroundNotification } from './handlers/HandleBackGroundNotification';
import { HandleForeGroundNotification } from './handlers/HandleForeGroundNotification';

import type { Messaging } from './handlers/types';

export const InitializePushService = (messaging: Messaging) => {
  HandleForeGroundNotification(messaging);
  HandleBackGroundNotification(messaging);
  HandlePushInteraction();
};

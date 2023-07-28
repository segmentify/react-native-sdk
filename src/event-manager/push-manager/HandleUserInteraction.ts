import { EventType } from '@notifee/react-native';
import {
  HandleClickedNotification,
  HandleReceivedNotification,
  CancelNotification,
} from './utils';

import type { Event as NotifeeEvent } from '@notifee/react-native';

/**
 * HandleUserInteraction
 * @description
 * HandleUserInteraction is a function that handles the user interaction with the notification.
 * It takes type and detail parameters.
 * type is the type of the event.
 * detail is the detail of the event.
 * @param type
 * @param detail
 * @returns Promise<void>
 */

export const HandleUserInteraction = async ({
  type,
  detail,
}: {
  type: NotifeeEvent['type'];
  detail: NotifeeEvent['detail'];
}) => {
  const DISMISSED = EventType.DISMISSED;
  const PRESSED = EventType.PRESS;
  const DELIVERED = EventType.DELIVERED;

  const id = detail.notification?.id;
  const instanceId = String(detail?.notification?.data?.instanceId);

  switch (type) {
    case DELIVERED:
      HandleReceivedNotification({
        instanceId,
      });
      break;
    case PRESSED:
      HandleClickedNotification({
        instanceId,
      });
      break;
    case DISMISSED:
      if (id) CancelNotification({ id });
      break;
  }
};

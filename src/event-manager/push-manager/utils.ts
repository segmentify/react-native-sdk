import { FirePushNotificationInteraction } from '../EventManager';
import notifee from '@notifee/react-native';

export const HandleClickedNotification = ({
  instanceId,
}: {
  instanceId?: string;
}): void => {
  if (instanceId) {
    FirePushNotificationInteraction({
      instanceId: instanceId,
      type: 'CLICK',
    });
  }
};

export const HandleReceivedNotification = ({
  instanceId,
}: {
  instanceId?: string;
}): void => {
  if (instanceId) {
    FirePushNotificationInteraction({
      instanceId: instanceId,
      type: 'VIEW',
    });
  }
};

export const CancelNotification = async ({ id }: { id: string }) => {
  await notifee.cancelNotification(id);
};

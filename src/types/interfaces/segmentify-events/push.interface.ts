export type TRequestPushNotificationPermission = {
  deviceToken: string;
  userId: string;
};

export type TFirePushNotification = TRequestPushNotificationPermission & {
  type: string;
  instanceId: string;
  productId: string;
};

export type TRequestPushNotificationPermissionPayload =
  TRequestPushNotificationPermission & {
    providerType?: 'FIREBASE' | 'APNS';
    os: string;
  };

export type TFirePushNotificationInteraction = {
  instanceId: string;
} & {
  type: 'VIEW' | 'CLICK';
};

export interface TNotificationConfigs {
  notificationConfigs: {
    title: string;
    body: string;
    ios?: {
      foregroundPresentationOptions?: {
        badge: boolean;
        sound: boolean;
        banner: boolean;
        list: boolean;
      };
      attachments?: [
        {
          url: string;
          thumbnailHidden: boolean;
        }
      ];
    };
    android?: {
      channelId: string;
      smallIcon: string;
      pressAction?: {
        id: string;
      };
    };
  };
}

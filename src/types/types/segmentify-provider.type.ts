import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export type TContext = {
  children?: React.ReactNode;
  segmentify: {
    config: {
      apiKey: string;
      dataCenterUrl: string;
      subDomain: string;
      dataCenterPushUrl: string;
      isApnsEnabled: boolean;
    };
    user: {
      userId: string;
      sessionId: string;
    };
  };
  messaging?:
    | FirebaseMessagingTypes.Statics
    | FirebaseMessagingTypes.Module
    | any;
  pushNotificationConfig?: any;
  logger?: boolean;
};

export type TSegmentifyState = {
  segmentify: {
    deviceInformation: {
      deviceName: string;
      deviceType: string;
      appVersion?: string;
    };
    config: {
      apiKey: string;
      dataCenterUrl: string;
      subDomain: string;
      dataCenterPushUrl: string;
      isApnsEnabled: boolean;
    };
    user: {
      userId: string;
      sessionId: string;
    };
  };
};

export type TContextInitilizer = {
  stateSetter: React.Dispatch<React.SetStateAction<TSegmentifyState>>;
  logger: boolean;
  ctxData: {
    config: TSegmentifyState['segmentify']['config'];
    user: TSegmentifyState['segmentify']['user'];
  };
};

export type UtilsGetStoreType = Promise<{
  deviceInformation: TSegmentifyState['segmentify']['deviceInformation'];
  config: TSegmentifyState['segmentify']['config'];
  user: TSegmentifyState['segmentify']['user'];
}>;

export type StorageType = {
  key: string;
  value: any;
};

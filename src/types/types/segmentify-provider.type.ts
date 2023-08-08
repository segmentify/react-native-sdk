import type { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

/**
 * @typedef
 * @name TContext
 * @description
 * TContext is a type that describes the context of the SegmentifyProvider.
 * @property {React.ReactNode} [children] The children of the SegmentifyProvider.
 * @property {object} segmentify The segmentify object that contains the config and user information.
 * @property {object} segmentify.config The config object that contains the apiKey, dataCenterUrl, subDomain, dataCenterPushUrl and isApnsEnabled.
 * @property {string} segmentify.config.apiKey The apiKey of the Segmentify.
 * @property {string} segmentify.config.dataCenterUrl The dataCenterUrl of the Segmentify.
 * @property {string} segmentify.config.subDomain The subDomain of the Segmentify.
 * @property {string} segmentify.config.dataCenterPushUrl The dataCenterPushUrl of the Segmentify.
 * @property {boolean} segmentify.config.isApnsEnabled The isApnsEnabled of the Segmentify.
 * @property {object} segmentify.user The user object that contains the userId and sessionId.
 * @property {string} segmentify.user.userId The userId of the user.
 * @property {string} segmentify.user.sessionId The sessionId of the user.
 * @property {object} messaging The messaging object that contains the FirebaseMessagingTypes.Statics and FirebaseMessagingTypes.Module.
 * @property {boolean} logger The logger of the SegmentifyProvider.
 */
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
  logger?: boolean;
};

/**
 * @typedef
 * @name TSegmentifyState
 * @description
 * TSegmentifyState is a type that describes the state of the SegmentifyProvider.
 * @property {object} segmentify The segmentify object that contains the deviceInformation, config and user information.
 * @property {object} segmentify.deviceInformation The deviceInformation object that contains the deviceName and deviceType.
 * @property {string} segmentify.deviceInformation.deviceName The deviceName of the device.
 * @property {string} segmentify.deviceInformation.deviceType The deviceType of the device.
 * @property {string} [segmentify.deviceInformation.appVersion] The appVersion of the device.
 * @property {object} segmentify.config The config object that contains the apiKey, dataCenterUrl, subDomain, dataCenterPushUrl and isApnsEnabled.
 * @property {string} segmentify.config.apiKey The apiKey of the Segmentify.
 * @property {string} segmentify.config.dataCenterUrl The dataCenterUrl of the Segmentify.
 * @property {string} segmentify.config.subDomain The subDomain of the Segmentify.
 * @property {string} segmentify.config.dataCenterPushUrl The dataCenterPushUrl of the Segmentify.
 * @property {boolean} segmentify.config.isApnsEnabled The isApnsEnabled of the Segmentify.
 * @property {object} segmentify.user The user object that contains the userId and sessionId.
 * @property {string} segmentify.user.userId The userId of the user.
 * @property {string} segmentify.user.sessionId The sessionId of the user.
 * @example
 *  {
 *   segmentify: {
 *    deviceInformation: {
 *      deviceName: 'iPhone 12 Pro Max',
 *      deviceType: 'IOS',
 *      appVersion: '1.0.0',
 *      },
 *    config: {
 *      apiKey:'1234567890',
 *      dataCenterUrl: 'https://datacenter.segmentify.com',
 *      subDomain: 'example',
 *      dataCenterPushUrl: 'https://datacenter.segmentify.com',
 *      isApnsEnabled: true,
 *    },
 *   user: {
 *    userId: '1234567890',
 *    sessionId: '1234567890',
 *   },
 *  }
 * }
 */

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

/**
 * @typedef
 * @name TSegmentifyContext
 * @description
 * TSegmentifyContext is a type that describes the context of the SegmentifyProvider.
 * @property {TSegmentifyState} segmentify The segmentify object that contains the deviceInformation, config and user information.
 * @property {React.Dispatch<React.SetStateAction<TSegmentifyState>>} stateSetter The stateSetter of the SegmentifyProvider.
 * @property {boolean} logger The logger of the SegmentifyProvider.
 * @property {object} ctxData The ctxData of the SegmentifyProvider.
 * @property {object} ctxData.config The config object that contains the apiKey, dataCenterUrl, subDomain, dataCenterPushUrl and isApnsEnabled.
 * @property {string} ctxData.config.apiKey The apiKey of the Segmentify.
 * @property {string} ctxData.config.dataCenterUrl The dataCenterUrl of the Segmentify.
 * @property {string} ctxData.config.subDomain The subDomain of the Segmentify.
 * @property {string} ctxData.config.dataCenterPushUrl The dataCenterPushUrl of the Segmentify.
 * @property {boolean} ctxData.config.isApnsEnabled The isApnsEnabled of the Segmentify.
 * @property {object} ctxData.user The user object that contains the userId and sessionId.
 * @property {string} ctxData.user.userId The userId of the user.
 * @property {string} ctxData.user.sessionId The sessionId of the user.
 */
export type TContextInitilizer = {
  stateSetter: React.Dispatch<React.SetStateAction<TSegmentifyState>>;
  logger: boolean;
  ctxData: {
    config: TSegmentifyState['segmentify']['config'];
    user: TSegmentifyState['segmentify']['user'];
  };
};

/**
 * @typedef
 * @name UtilsGetStoreType
 * @description
 * UtilsGetStoreType is a type that describes the return type of the getStore function.
 * @property {object} deviceInformation The deviceInformation object that contains the deviceName and deviceType.
 * @property {string} deviceInformation.deviceName The deviceName of the device.
 * @property {string} deviceInformation.deviceType The deviceType of the device.
 * @property {string} [deviceInformation.appVersion] The appVersion of the device.
 * @property {object} config The config object that contains the apiKey, dataCenterUrl, subDomain, dataCenterPushUrl and isApnsEnabled.
 * @property {string} config.apiKey The apiKey of the Segmentify.
 * @property {string} config.dataCenterUrl The dataCenterUrl of the Segmentify.
 * @property {string} config.subDomain The subDomain of the Segmentify.
 * @property {string} config.dataCenterPushUrl The dataCenterPushUrl of the Segmentify.
 * @property {boolean} config.isApnsEnabled The isApnsEnabled of the Segmentify.
 * @property {object} user The user object that contains the userId and sessionId.
 * @property {string} user.userId The userId of the user.
 * @property {string} user.sessionId The sessionId of the user.
 */
export type UtilsGetStoreType = Promise<{
  deviceInformation: TSegmentifyState['segmentify']['deviceInformation'];
  config: TSegmentifyState['segmentify']['config'];
  user: TSegmentifyState['segmentify']['user'];
}>;

/**
 * @typedef
 * @name StorageType
 * @description
 * StorageType is a type that describes the parameters that all events take.
 * @property {string} key The key of the storage.
 * @property {any} value The value of the storage.
 */
export type StorageType = {
  key: string;
  value: any;
};

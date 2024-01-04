import type { TSegmentifyState } from '../types';

/**
 * @namespace segmentifyInitialState
 * @description
 * Initial state of segmentify reducer for global state
 * @property {Object} segmentify
 * @property {Object} segmentify.deviceInformation
 * @property {string} segmentify.deviceInformation.deviceName
 * @property {string} segmentify.deviceInformation.deviceType
 * @property {string} segmentify.deviceInformation.appVersion
 * @property {Object} segmentify.config
 * @property {string} segmentify.config.apiKey
 * @property {string} segmentify.config.dataCenterUrl
 * @property {string} segmentify.config.subDomain
 * @property {string} segmentify.config.dataCenterPushUrl
 * @property {boolean} segmentify.config.isApnsEnabled
 * @property {Object} segmentify.user
 * @property {string} segmentify.user.userId
 * @property {string} segmentify.user.sessionId
 */
export const segmentifyInitialState: TSegmentifyState = {
  segmentify: {
    deviceInformation: {
      deviceName: '',
      deviceType: '',
      appVersion: '',
    },
    config: {
      apiKey: '',
      dataCenterUrl: '',
      subDomain: '',
      dataCenterPushUrl: '',
      isApnsEnabled: false,
    },
    user: {
      userId: '',
      sessionId: '',
    },
  },
};

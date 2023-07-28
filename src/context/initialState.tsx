/**
 * Segmentify Initial State
 * @type {Object}
 * @property {Object} segmentify.deviceInformation - Device Information
 * @property {string} segmentify.deviceInformation.deviceName - Device Name
 * @property {string} segmentify.deviceInformation.deviceType - Device Type
 * @property {string} segmentify.deviceInformation.appVersion - App Version
 * @property {Object} segmentify.config - Segmentify Config
 * @property {string} segmentify.config.apiKey - Segmentify Api Key
 * @property {string} segmentify.config.dataCenterUrl - Segmentify Data Center Url
 * @property {string} segmentify.config.subDomain - Segmentify Sub Domain
 * @property {string} segmentify.config.dataCenterPushUrl - Segmentify Data Center Push Url
 * @property {boolean} segmentify.config.isApnsEnabled - Segmentify Apns Enabled
 * @property {Object} segmentify.user - Segmentify User
 * @property {string} segmentify.user.userId - Segmentify User Id
 * @property {string} segmentify.user.sessionId - Segmentify Session Id
 */

export const segmentifyInitialState = {
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

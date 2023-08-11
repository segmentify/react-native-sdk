import type { TSegmentifyState } from '../types';

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

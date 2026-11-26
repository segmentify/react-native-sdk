import { Platform } from 'react-native';

import { SDK_VERSION } from '../constants';

type UserAgentParts = {
  sdkVersion: string;
  platform: string;
  osVersion?: string | number | null;
  model?: string | null;
};

/**
 * @memberof module:CoreFunctions
 * @description Builds the `User-Agent` header of the SDK's requests:
 *
 *     SegmentifySDK/<sdkVersion> (react-native; <os> <osVersion>; <model>)
 *
 * The backend reads the device and operating system from it (SFY-28912), so
 * the format is a contract shared with the iOS and Android SDKs. Returns
 * `undefined` on platforms other than iOS and Android.
 */
export const buildUserAgent = (_parts: UserAgentParts): string | undefined => {
  return undefined;
};

/**
 * @memberof module:CoreFunctions
 * @description The `User-Agent` header for this device.
 */
export const getUserAgent = (): string | undefined => {
  const constants = (Platform.constants ?? {}) as {
    Release?: string;
    Model?: string;
  };

  return buildUserAgent({
    sdkVersion: SDK_VERSION,
    platform: Platform.OS,
    osVersion: constants.Release ?? Platform.Version,
    model: constants.Model,
  });
};

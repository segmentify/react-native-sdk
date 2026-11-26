import { Platform } from 'react-native';

import { SDK_VERSION } from '../constants';

const UNKNOWN = 'unknown';

const OS_NAMES: Record<string, string | undefined> = {
  ios: 'iOS',
  android: 'Android',
};

/** Printable ASCII without the characters that delimit the parts of the header. */
const text = (value?: string | number | null): string =>
  String(value ?? '')
    .replace(/[^\x20-\x7E]|[;()]/g, '')
    .trim();

/** `text` without spaces and slashes, for the parts that are a single token. */
const token = (value?: string | number | null): string =>
  text(value).replace(/[ /]/g, '');

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
export const buildUserAgent = ({
  sdkVersion,
  platform,
  osVersion,
  model,
}: UserAgentParts): string | undefined => {
  const os = OS_NAMES[platform];

  if (!os) {
    return undefined;
  }

  const device = [
    'react-native',
    `${os} ${token(osVersion) || UNKNOWN}`,
    text(model),
  ].filter(Boolean);

  return `SegmentifySDK/${token(sdkVersion) || UNKNOWN} (${device.join('; ')})`;
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

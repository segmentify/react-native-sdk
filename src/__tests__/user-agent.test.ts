import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { SDK_VERSION } from '../constants';
import { apiGetAway } from '../utils/api-getaway';
import { buildUserAgent, getUserAgent } from '../utils/user-agent';

import { providerConfig } from './__mocks__/segmentify-provider.config';

const { version } = require('../../package.json');

describe('SDK_VERSION', () => {
  it('equals the version in package.json', () => {
    expect(SDK_VERSION).toEqual(version);
  });
});

describe('buildUserAgent', () => {
  it('names the SDK, the operating system and the model', () => {
    expect(
      buildUserAgent({
        sdkVersion: '0.9.0',
        platform: 'android',
        osVersion: '13',
        model: 'SM-S918B',
      })
    ).toEqual('SegmentifySDK/0.9.0 (react-native; Android 13; SM-S918B)');
  });

  it('leaves the model out when it is not known', () => {
    expect(
      buildUserAgent({ sdkVersion: '0.9.0', platform: 'ios', osVersion: '17.4' })
    ).toEqual('SegmentifySDK/0.9.0 (react-native; iOS 17.4)');
  });

  it('accepts a numeric version', () => {
    expect(
      buildUserAgent({ sdkVersion: '0.9.0', platform: 'android', osVersion: 34 })
    ).toEqual('SegmentifySDK/0.9.0 (react-native; Android 34)');
  });

  it('sends "unknown" when the version is missing', () => {
    expect(
      buildUserAgent({ sdkVersion: '', platform: 'ios', osVersion: null })
    ).toEqual('SegmentifySDK/unknown (react-native; iOS unknown)');
  });

  it('removes characters that would break the format', () => {
    const header = buildUserAgent({
      sdkVersion: '0.9.0 beta',
      platform: 'android',
      osVersion: '14 (U)',
      model: 'Galaxy;S24 Ayşe\n',
    });

    expect(header).toEqual(
      'SegmentifySDK/0.9.0beta (react-native; Android 14U; GalaxyS24 Aye)'
    );
  });

  it('returns undefined on other platforms', () => {
    expect(
      buildUserAgent({ sdkVersion: '0.9.0', platform: 'web', osVersion: '1' })
    ).toBeUndefined();
  });
});

describe('getUserAgent', () => {
  it('describes this SDK on this device', () => {
    expect(getUserAgent()).toMatch(
      new RegExp(
        `^SegmentifySDK/${SDK_VERSION.replace(/\./g, '\\.')} ` +
          '\\(react-native; (iOS|Android) [^;() ]+(; [^;()]+)?\\)$'
      )
    );
  });
});

describe('apiGetAway', () => {
  it('sends the User-Agent header with every request', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(providerConfig.config));
    let sent: Record<string, unknown> = {};

    await apiGetAway.get('https://segmentify-sdk.test/ping', {
      adapter: async (config) => {
        sent = { ...config.headers };
        return {
          data: { statusCode: 'SUCCESS' },
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        };
      },
    });

    expect(sent['User-Agent']).toEqual(getUserAgent());
    expect(sent['User-Agent']).toBeDefined();
  });
});

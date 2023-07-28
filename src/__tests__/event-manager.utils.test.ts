import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import {
  getSubDomain,
  getApiKey,
  getDataCenterUrl,
  getApiKeyWithBaseUrl,
  getDataCenterPushUrl,
  getUser,
  getConfiguration,
  getDeviceInformation,
} from '../event-manager/utils';

import { providerConfig } from './__mocks__/segmentify-provider.config';

const value = providerConfig.config;

describe('getSubDomain', () => {
  it('calls getStorageItem with correct arguments', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(value));

    await expect(getSubDomain()).resolves.toEqual(value.subDomain);
  });

  it('if subDomain is empty string throws error', async () => {
    const config = { subDomain: '' };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getSubDomain()).rejects.toThrow('Subdomain is not defined');
  });

  it('if subDomain is undefined throws error', async () => {
    const config = { subDomain: undefined };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getSubDomain()).rejects.toThrow('Subdomain is not defined');
  });

  it('if subDomain is null throws error', async () => {
    const config = { subDomain: null };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getSubDomain()).rejects.toThrow('Subdomain is not defined');
  });
});

describe('getApiKey', () => {
  it('calls getStorageItem with correct arguments', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(value));

    await expect(getApiKey()).resolves.toEqual(value.apiKey);
  });

  it('if getApiKey is empty string throws error', async () => {
    const config = { apiKey: '' };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getApiKey()).rejects.toThrow('API Key is not defined');
  });

  it('if apiKey is undefined throws error', async () => {
    const config = { apiKey: undefined };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getApiKey()).rejects.toThrow('API Key is not defined');
  });

  it('if apiKey is null throws error', async () => {
    const config = { apiKey: null };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getApiKey()).rejects.toThrow('API Key is not defined');
  });
});

describe('getDataCenterUrl', () => {
  it('calls getDataCenterUrl with correct arguments', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(value));

    await expect(getDataCenterUrl()).resolves.toEqual(value.dataCenterUrl);
  });

  it('if dataCenterUrl is empty string throws error', async () => {
    const config = { dataCenterUrl: '' };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getDataCenterUrl()).rejects.toThrow('Base URL is not defined');
  });

  it('if dataCenterUrl is undefined throws error', async () => {
    const config = { dataCenterUrl: undefined };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getDataCenterUrl()).rejects.toThrow('Base URL is not defined');
  });

  it('if dataCenterUrl is null throws error', async () => {
    const config = { dataCenterUrl: null };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getDataCenterUrl()).rejects.toThrow('Base URL is not defined');
  });
});

describe('getApiKeyWithBaseUrl', () => {
  it('calls getApiKeyWithBaseUrl with correct arguments', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(value));
    await expect(getApiKeyWithBaseUrl()).resolves.toEqual({
      apiKey: value.apiKey,
      dataCenterUrl: value.dataCenterUrl,
    });
  });

  it('if apiKey is empty string throws error', async () => {
    const config = {
      ...value,
      apiKey: '',
    };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getApiKeyWithBaseUrl()).rejects.toThrow(
      'API Key is not defined'
    );
  });

  it('if dataCenterUrl is empty string throws error', async () => {
    const config = {
      ...value,
      dataCenterUrl: '',
    };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getApiKeyWithBaseUrl()).rejects.toThrow(
      'Base URL is not defined'
    );
  });
});

describe('getDataCenterPushUrl', () => {
  it('calls getDataCenterPushUrl with correct arguments', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(value));

    await expect(getDataCenterPushUrl()).resolves.toEqual(
      value.dataCenterPushUrl
    );
  });

  it('if dataCenterUrl is empty string throws error', async () => {
    const config = { dataCenterUrl: '' };

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getDataCenterPushUrl()).rejects.toThrow(
      'Data Center Push Url is not defined.'
    );
  });
});

describe('getUser', () => {
  it('calls getUser with correct arguments', async () => {
    mockAsyncStorage.setItem('user', JSON.stringify(providerConfig.user));

    await expect(getUser()).resolves.toEqual(providerConfig.user);
  });

  it('if userId is empty string resolves sessionIdOnly', async () => {
    const user = {
      ...providerConfig.user,
      userId: '',
    };

    mockAsyncStorage.setItem('user', JSON.stringify(user));

    await expect(getUser()).resolves.toEqual(user);
  });

  it('if sessionId is empty string resolves userId only', async () => {
    const user = {
      ...providerConfig.user,
      sessionId: '',
    };

    mockAsyncStorage.setItem('user', JSON.stringify(user));

    await expect(getUser()).resolves.toEqual(user);
  });
});

describe('getConfiguration', () => {
  it('calls getConfiguration with correct arguments', async () => {
    mockAsyncStorage.setItem('config', JSON.stringify(value));

    await expect(getConfiguration()).resolves.toEqual(value);
  });

  it('if config is falsy throws error', async () => {
    const config = null;

    mockAsyncStorage.setItem('config', JSON.stringify(config));

    await expect(getConfiguration()).rejects.toThrow(
      'Configuration is not defined'
    );
  });
});

describe('getDeviceInformation', () => {
  it('calls getDeviceInformation with correct arguments', async () => {
    const deviceInformation = {
      deviceType: 'ios',
      deviceName: 'iPhone 12',
      appVersion: '14.4',
    };

    mockAsyncStorage.setItem(
      'deviceInformation',
      JSON.stringify(deviceInformation)
    );

    await expect(getDeviceInformation()).resolves.toEqual(deviceInformation);
  });

  it('if deviceInformation is falsy throws error', async () => {
    const deviceInformation = null;

    mockAsyncStorage.setItem(
      'deviceInformation',
      JSON.stringify(deviceInformation)
    );

    await expect(getDeviceInformation()).rejects.toThrow(
      'Device is not defined'
    );
  });
});

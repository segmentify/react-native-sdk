import { getStorageItem } from '../utils';

const eventManagerUtilErrorHandler = ({ message }: { message: string }) => {
  return `Error: ${message}`;
};

export const getSubDomain = async () => {
  const config = await getStorageItem({ key: 'config' });
  const subDomain = config?.subDomain;

  if (!subDomain) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'Subdomain is not defined' })
    );
  }

  return subDomain;
};

export const getApiKey = async () => {
  const config = await getStorageItem({ key: 'config' });
  const apiKey = config?.apiKey;

  if (!apiKey) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'API Key is not defined' })
    );
  }

  return apiKey;
};

export const getDataCenterUrl = async () => {
  const config = await getStorageItem({ key: 'config' });
  const dataCenterUrl = config?.dataCenterUrl;

  if (!dataCenterUrl) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'Base URL is not defined' })
    );
  }

  return dataCenterUrl;
};

export const getApiKeyWithBaseUrl = async () => {
  const apiKey = await getApiKey();
  const dataCenterUrl = await getDataCenterUrl();

  if (!apiKey) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'API Key is not defined' })
    );
  }

  if (!dataCenterUrl) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'Base URL is not defined' })
    );
  }

  return {
    apiKey,
    dataCenterUrl,
  };
};

export const getDataCenterPushUrl = async () => {
  const config = await getStorageItem({ key: 'config' });
  const dataCenterPushUrl = config?.dataCenterPushUrl;

  if (!dataCenterPushUrl) {
    throw new Error(
      eventManagerUtilErrorHandler({
        message: 'Data Center Push Url is not defined.',
      })
    );
  }

  return dataCenterPushUrl;
};

export const getDeviceInformation = async () => {
  const config = await getStorageItem({ key: 'deviceInformation' });

  if (!config) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'Device is not defined' })
    );
  }

  return config;
};

export const getConfiguration = async () => {
  const config = await getStorageItem({ key: 'config' });

  if (!config) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'Configuration is not defined' })
    );
  }

  return config;
};

export const getUser = async () => {
  const user = await getStorageItem({ key: 'user' });

  if (!user) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'User is not defined' })
    );
  }

  return user;
};

export const getLanguage = async () => {
  const config = await getStorageItem({ key: 'config' });
  const language = config?.language;

  if (!language) {
    throw new Error(
      eventManagerUtilErrorHandler({ message: 'Language is not defined' })
    );
  }

  return language;
};

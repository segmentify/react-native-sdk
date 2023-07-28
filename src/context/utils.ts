import { setStorageItem, getStorageItem } from '../utils';
import { RequestCredentials } from '../event-manager';

import type { TCredentialsPayload, UtilsGetStoreType } from '../types';

/**
 * initialUserHandler
 * @param user
 * @returns  Promise<void>
 */

export const initialUserHandler = async (user: TCredentialsPayload) => {
  const storageUser = await getStorageItem({ key: 'user' });
  if (storageUser === null) {
    return await RequestCredentials({
      requiredFields: 2,
    }).then(({ data }) => {
      const userId = data[0];
      const sessionId = data[1];
      setStorageItem({
        key: 'user',
        value: {
          userId,
          sessionId,
        },
      });
    });
  }
  if (storageUser.sessionId === '' && storageUser.userId === '') {
    return await RequestCredentials({
      requiredFields: 2,
    }).then(({ data }) => {
      const userId = data[0];
      const sessionId = data[1];
      setStorageItem({
        key: 'user',
        value: {
          userId,
          sessionId,
        },
      });
    });
  }
  if (storageUser.sessionId === null && storageUser.userId === null) {
    return await RequestCredentials({
      requiredFields: 2,
    }).then(({ data }) => {
      const userId = data[0];
      const sessionId = data[1];
      setStorageItem({
        key: 'user',
        value: {
          userId,
          sessionId,
        },
      });
    });
  }
  if (!storageUser.sessionId && storageUser.userId) {
    return await RequestCredentials({
      requiredFields: 1,
    }).then(({ data }) => {
      const sessionId = data[0];
      setStorageItem({
        key: 'user',
        value: {
          userId: user.userId,
          sessionId,
        },
      });
    });
  }
  if (!storageUser.userId && storageUser.sessionId) {
    return await RequestCredentials({
      requiredFields: 1,
    }).then(({ data }) => {
      const userId = data[0];
      setStorageItem({
        key: 'user',
        value: {
          userId,
          sessionId: user.sessionId,
        },
      });
    });
  }

  if (!storageUser.userId && !storageUser.sessionId) {
    return await RequestCredentials({
      requiredFields: 2,
    }).then(({ data }) => {
      const userId = data[0];
      const sessionId = data[1];
      setStorageItem({
        key: 'user',
        value: {
          userId,
          sessionId,
        },
      });
    });
  }
};

/**
 * getStore
 * @returns {UtilsGetStoreType}
 * @description
 * getStore is a function that is used to get the store from the storage.
 * It returns a promise that resolves to the store.
 * @throws Error
 */

export const getStore = async (): UtilsGetStoreType => {
  const deviceInformation = await getStorageItem({
    key: 'deviceInformation',
  });
  const config = await getStorageItem({ key: 'config' });
  const user = await getStorageItem({ key: 'user' });
  return {
    deviceInformation,
    config,
    user,
  };
};

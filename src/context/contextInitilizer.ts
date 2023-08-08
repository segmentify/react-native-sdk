import { Platform } from 'react-native';
import { useEffect, useCallback } from 'react';
import { setStorageItem } from '../utils';
import { initialUserHandler, getStore } from './utils';
import type { TContextInitilizer } from '../types';

/**
 * @typedef
 * @name useContextInitilizer
 * @description useContextInitilizer is a function that is used to set the storage and initial trigger of the Segmentify.
 * @param {TContextInitilizer} TContextInitilizer
 * @returns {void}
 */

export const useContextInitilizer = ({
  stateSetter,
  logger,
  ctxData,
}: TContextInitilizer) => {
  const { config, user } = ctxData;

  if (logger) {
    setStorageItem({ key: 'logger', value: logger });
  }

  const setStorage = useCallback(async () => {
    const deviceInformation = {
      deviceName:
        Platform.OS === 'ios'
          ? `Iphone ${Platform.Version} `
          : Platform.OS === 'android'
          ? `${Platform.constants.Brand} ${Platform.constants.Manufacturer} ${Platform.constants.Model}`
          : 'WEB',
      deviceType: Platform.OS.toUpperCase(),
      appVersion:
        Platform.OS === 'ios'
          ? `${Platform.constants.osVersion}`
          : Platform.OS === 'android'
          ? `${Platform.constants.Version}`
          : '',
    };
    await setStorageItem({
      key: 'deviceInformation',
      value: deviceInformation,
    });
    await setStorageItem({ key: 'config', value: config });
    await initialUserHandler(user);
    await getStore().then((store) => {
      stateSetter({
        segmentify: {
          deviceInformation: store.deviceInformation,
          config: store.config,
          user: store.user,
        },
      });
    });
  }, [config, user, stateSetter]);

  useEffect(() => {
    setStorage();
  }, [config, user, setStorage, stateSetter]);
};

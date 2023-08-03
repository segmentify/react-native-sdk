import { Platform } from 'react-native';
import { useEffect, useCallback } from 'react';
import { setStorageItem } from '../utils';
import { initialUserHandler, getStore } from './utils';
import type { TContextInitilizer } from '../types';

/**
 * useContextInitilizer
 * @description
 * useContextInitilizer is a function that is used to initialize Segmentify context.
 * It is used in SegmentifyProvider component.
 * It takes stateSetter and ctxData as parameters.
 * stateSetter is a function that is used to set Segmentify context state.
 * ctxData is an object that contains config and user data.
 * It sets deviceInformation, config and user data to AsyncStorage.
 * It also sets deviceInformation, config and user data to Segmentify context state.
 * It is used in SegmentifyProvider component.
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

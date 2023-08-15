import AsyncStorage from '@react-native-async-storage/async-storage';

import type { StorageType } from '../types';

/**
 * @memberof module:CoreFunctions
 * @description Set item in storage
 * @function setStorageItem
 * @param {object} params
 * @param {string} params.key
 * @param {any} params.value
 * @returns {Promise<void>}
 */
const setStorageItem = async ({ key, value }: StorageType) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw new Error(`setItem error: ${e}`);
  }
};

/**
 * @memberof module:CoreFunctions
 * @description Get item from storage
 * @function getStorageItem
 * @param {object} params
 * @param {string} params.key
 * @returns {Promise<any>}
 */

const getStorageItem = async ({ key }: Omit<StorageType, 'value'>) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`gettItem error: ${e}`);
  }
};

export { setStorageItem, getStorageItem };

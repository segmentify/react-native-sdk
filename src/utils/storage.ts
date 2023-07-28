import AsyncStorage from '@react-native-async-storage/async-storage';

import type { StorageType } from '../types';
const setStorageItem = async ({ key, value }: StorageType) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw new Error(`setItem error: ${e}`);
  }
};

const getStorageItem = async ({ key }: Omit<StorageType, 'value'>) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`gettItem error: ${e}`);
  }
};

export { setStorageItem, getStorageItem };

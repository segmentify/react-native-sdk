import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { setStorageItem, getStorageItem } from '../utils';

// Mock AsyncStorage in Jest

describe('setStorageItem', () => {
  it('calls AsyncStorage.setItem with correct arguments', async () => {
    const key = 'myKey';
    const value = { foo: 'bar' };
    const jsonValue = JSON.stringify(value);

    await setStorageItem({ key, value });

    expect(mockAsyncStorage.setItem).toHaveBeenCalledTimes(1);
    expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(key, jsonValue);
  });
});

describe('getStorageItem', () => {
  it('calls AsyncStorage.getItem with correct arguments', async () => {
    const key = 'myKey';

    await getStorageItem({ key });

    expect(mockAsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('if key is empty string returns null', async () => {
    const key = '';

    await getStorageItem({ key });

    await expect(getStorageItem({ key })).resolves.toEqual(null);
  });
});

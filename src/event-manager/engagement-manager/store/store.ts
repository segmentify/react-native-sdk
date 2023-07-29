import type { TInitialState } from './types.d.ts';

import { campaignMock } from './campaignMock.js';

function createStore<T>(initialState: T) {
  let currentState = initialState;
  const listeners = new Set();

  return {
    getState: () => currentState,
    setState: (newState: T) => {
      currentState = newState;
      listeners.forEach((listener: any) => listener(currentState));
    },
    subscribe: (listener: any) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

const store = createStore<TInitialState>(campaignMock);

export default store;

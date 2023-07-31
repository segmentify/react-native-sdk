import { useSyncExternalStore } from 'react';
import store from './store';

import type { TInitialState } from './types.d.ts';

export const useExternalStore = (selector = (state: TInitialState) => state) =>
  useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState())
  );

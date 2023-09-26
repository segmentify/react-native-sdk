import { type TWheelOfFortuneState } from '../types/types';

export function wofReducer(wofState: TWheelOfFortuneState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case 'change': {
      return {
        ...wofState,
        ...payload,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

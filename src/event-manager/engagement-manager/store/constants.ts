import { campaignMock } from './campaignMock';

export enum ACTIONS {
  SET_CAMPAIGN = 'SET_CAMPAIGN',
  GET_CAMPAIGN = 'GET_CAMPAIGN',
  FLUSH_STATE = 'FLUSH_STATE',
}

export type ACTIONTYPES =
  | { type: 'SET_CAMPAIGN'; payload: typeof campaignMock }
  | { type: 'GET_CAMPAIGN'; payload: string }
  | { type: 'FLUSH_STATE' };

import { campaignMock } from './campaignMock';

import type { ACTIONTYPES } from './constants';
import { ACTIONS } from './constants';

const initialState = campaignMock;

const setCampaignHandler = ({ state, action }) => {};

const getCampaignHandler = ({ campaignType, currentRoute }) => {};

const flushStateHandler = ({ state }) => {};

export const reducer = ({
  state = initialState,
  action,
}: {
  state: typeof campaignMock;
  action: ACTIONTYPES;
}) => {
  switch (action.type) {
    case ACTIONS.SET_CAMPAIGN:
      return setCampaignHandler({ state, action });
    case ACTIONS.GET_CAMPAIGN:
      return getCampaignHandler({
        campaignType: action.payload,
        currentRoute: '',
      });
    case ACTIONS.FLUSH_STATE:
      return flushStateHandler({ state });
    default:
      return state;
  }
};

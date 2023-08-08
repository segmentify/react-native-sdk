import type { SEGMENTIFY_EVENTS } from '..';
import type { TOV } from './util.types';

type eventBodyTypes = {
  requiredParams?: string[];
  optionalParams?: string[];
};

type eventKeys = TOV<typeof SEGMENTIFY_EVENTS>;

export type TSEGMENTIFY_EVENT_PARAMETERS = {
  [Key in eventKeys]: eventBodyTypes;
};

import type {
  TSEGMENTIFY_EVENTS,
  TCURRENCY,
  TSUPPORTED_LANGUAGES,
} from '../types';

export interface SegmentifyBase {
  name: TSEGMENTIFY_EVENTS;
  pageUrl?: String;
  currency?: TCURRENCY | String;
  lang?: TSUPPORTED_LANGUAGES | String;
  params?: Map<String, Object>;
  nextPage?: Boolean;
  os: 'android' | 'os';
  device: 'android' | 'ios';
  osversion?: String;
  appVersion?: String | null;
  testMode?: Boolean;
  region?: String;
  sessionId?: String;
  userId?: String;
}

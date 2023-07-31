import type {
  TSEGMENTIFY_EVENTS,
  TCURRENCY,
  TSUPPORTED_LANGUAGES,
  TOS_TYPES,
  TDEVICE_TYPES,
} from '../types';

export interface SegmentifyBase {
  name: TSEGMENTIFY_EVENTS;
  pageUrl?: String;
  currency?: TCURRENCY;
  lang?: TSUPPORTED_LANGUAGES;
  params?: Map<String, Object>;
  nextPage?: Boolean;
  osversion?: String;
  appVersion?: String | null;
  testMode?: Boolean;
  region?: String;
  sessionId: String;
  userId: String;
  os: TOS_TYPES;
  device: TDEVICE_TYPES;
}

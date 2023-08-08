import type {
  TSEGMENTIFY_EVENTS,
  TCURRENCY,
  TSUPPORTED_LANGUAGES,
  TOS_TYPES,
  TDEVICE_TYPES,
} from '../types';

/**
 * Interface has common attributes of all events.
 */
export interface CommonEventParameters {
  /**
   * Event Name (Mandatory)
   * @example
   * 'PAGE_VIEW', 'INTERACTION', 'CUSTOM_EVENT', 'USER_OPERATIONS', 'BASKET_OPERATIONS', 'CHECKOUT', 'PRODUCT_VIEW', 'SEARCH'
   */
  name: TSEGMENTIFY_EVENTS;
  /**
   * Page Url (Optional)
   * @example
   * 'https://www.example.com'
   */
  pageUrl?: string;
  /**
   * Currency (Optional) ISO 4217
   * @example
   * 'USD', 'EUR'
   */
  currency?: TCURRENCY;
  /**
   * Language (Optional) ISO 639-1
   * @example
   * 'TR', 'EN'
   */
  lang?: TSUPPORTED_LANGUAGES;
  /**
   * Params (Optional)
   * @example
   * { 'param1': 'value1', 'param2': 'value2' }
   */
  params?: Map<string, string>;
  /**
   * nextPage (Optional) - Has no effect on mobile SDKs
   * @example
   * true, false
   */
  nextPage?: Boolean;
  /**
   * Operationg System
   * @example
   * 'IOS', 'ANDROID'
   */
  osversion?: string;
  /**
   * App Version
   * @example
   * '1.0.0'
   */
  appVersion?: string | null;
  /**
   * Test Mode - Has no overlap with mobile SDKs
   * @example
   * true, false
   * @default
   * false
   */
  testMode?: Boolean;
  /**
   * Region
   * @example
   * 'TR', 'US'
   */
  region?: string;
  /**
   * Session Id (Mandatory)
   * Session Id has been set in Segmentify.init() method.
   */
  sessionId: string;
  /**
   * User Id (Mandatory)
   * User Id has been set in Segmentify.init() method.
   */
  userId: string;
  /**
   * os (Mandatory)
   * @example
   * 'IOS', 'ANDROID'
   */
  os: TOS_TYPES;
  /**
   * device (Mandatory)
   * @example
   * 'IOS', 'ANDROID'
   */
  device: TDEVICE_TYPES;
}

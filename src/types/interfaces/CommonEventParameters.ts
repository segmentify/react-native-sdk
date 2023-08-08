import type {
  TSEGMENTIFY_EVENTS,
  TCURRENCY,
  TSUPPORTED_LANGUAGES,
  TOS_TYPES,
  TDEVICE_TYPES,
} from '../types';

/**
 * @typedef
 * @name CommonEventParameters
 * @description
 * CommonEventParameters is a type that describes the parameters that all events take.
 * @property {TSEGMENTIFY_EVENTS} name Name of the event (Mandatory)
 * @property {string} [pageUrl] Url of the current page which the event is generated (Optional)
 * @property {TCURRENCY} [currency] Currency of product price. Must be in Short Format. If not given, account's currency will be used for the product(Optional) ISO 4217
 * @property {TSUPPORTED_LANGUAGES} [lang] Type of current visitor's language.Contact us for other languages. (Optional) ISO 639-1
 * @property {Map<string, string>} [params] Params (Optional)
 * @property {boolean} [nextPage] nextPage (Optional) - Has no effect on mobile SDKs
 * @property {string} [osversion] Operationg System
 * @property {string | null} [appVersion] App Version
 * @property {boolean} [testMode] Test Mode Flag. If event is set to test mode, it will be only processed by campaigns in test mode and discarded in reports. Possible values are 'true' or 'false'
 * @property {string} [region] Type of current visitor's region.
 * @property {string} sessionId Unique id of the user session. Please check User & Session Management for creating unique key for the user/visitor session. You should send same key for every event of same user session and this id must be unique among other sessions (Mandatory)
 * @property {string} userId Unique id of the user. Please check User & Session Management for creating unique key for the user/visitor. You should send same key for every event of same user and this id must be unique among other users(Mandatory)
 * @property {TOS_TYPES} os os (Mandatory)
 * @property {TDEVICE_TYPES} device device (Mandatory)
 * @example
 *  {
 *   name: 'PAGE_VIEW',
 *   pageUrl: 'https://www.example.com',
 *   currency: 'USD',
 *   lang: 'EN',
 *   params: { 'param1': 'value1', 'param2': 'value2' },
 *   nextPage: true,
 *   osversion: 'IOS',
 *   appVersion: '1.0.0',
 *   testMode: true,
 *   region: 'TR',
 *   sessionId: '1234567890',
 *   userId: '1234567890',
 *   os: 'IOS',
 *   device: 'IOS',
 *   nextPage: false,
 *  }
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
   * @default
   * false
   */
  nextPage?: boolean;
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
  testMode?: boolean;
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

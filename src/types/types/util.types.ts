import {
  SEGMENTIFY_EVENTS,
  SUPPORTED_LANGUAGES,
  CURRENCY,
  BASKET_OPERATIONS_STEPS,
  CHECKOUT_STEPS,
  INTERACTION_TYPES,
  PAGE_TYPES,
  USER_OPERATIONS_STEPS,
  BANNER_OPERATIONS_TYPES,
  OS_TYPES,
  DEVICE_TYPES,
  LOG_LEVELS,
} from '../enums/';

export type TLogLevel = keyof typeof LOG_LEVELS;
export type TSEGMENTIFY_EVENTS = typeof SEGMENTIFY_EVENTS;
export type TSUPPORTED_LANGUAGES = typeof SUPPORTED_LANGUAGES;
export type TCURRENCY = typeof CURRENCY;
export type TOS_TYPES = typeof OS_TYPES;
export type TDEVICE_TYPES = typeof DEVICE_TYPES;
export type TOV<T> = T[keyof T];

export type { BASKET_OPERATIONS_STEPS as TBASKET_OPERATIONS_STEPS };
export type { CHECKOUT_STEPS as TCHECKOUT_STEPS };
export type { INTERACTION_TYPES as TINTERACTION_TYPES };
export type { PAGE_TYPES as TPAGE_TYPES };
export type { USER_OPERATIONS_STEPS as TUSER_OPERATIONS_STEPS };
export type { BANNER_OPERATIONS_TYPES as TBANNER_OPERATIONS_TYPES };

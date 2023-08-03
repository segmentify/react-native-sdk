import {
  ERROR_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  INFO_COLOR,
  LOG_LEVELS,
} from '../constants';

import type { TLogLevel } from '../types/types/';

export const Logger = async ({
  level,
  payload,
  message,
}: {
  level: TLogLevel;
  payload?: any;
  message?: string;
}): Promise<void | string> => {
  switch (level) {
    case LOG_LEVELS.ERROR:
      console.log(`${ERROR_COLOR}${message?.toUpperCase()}`, payload);
      break;
    case LOG_LEVELS.INFO:
      console.log(`${INFO_COLOR}${message?.toUpperCase()}`, payload);
      break;
    case LOG_LEVELS.SUCCESS:
      console.log(`${SUCCESS_COLOR}${message?.toUpperCase()}`, payload);
      break;
    case LOG_LEVELS.WARNING:
      console.log(`${WARNING_COLOR}${message?.toUpperCase()}`, payload);
      break;
    default:
      console.log(`${INFO_COLOR}${message?.toUpperCase()}`, payload);
      break;
  }
};

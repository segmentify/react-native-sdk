import type { CommonEventParameters } from '../CommonEventParameters';
import type { TUSER_OPERATIONS_STEPS } from '../../types';

/**
 * UserOperationsEventType - This interface describes structure of UserOperations event's attributes type.
 */
export interface UserOperations extends CommonEventParameters {
  /**
   * The step of the user operations event. It can be 'signup', 'signin', 'signout' or 'update'.
   * @example
   * 'signup', 'signin', 'signout', 'update'
   * @type {TUSER_OPERATIONS_STEPS}
   */
  step: typeof TUSER_OPERATIONS_STEPS;
  /**
   * The username of the user.
   * @example
   * 'John_Doe' -'johndoe' - 'johndoe123' - 'John Doe'
   */
  username?: string;
  /**
   * The full name of the user.
   * @example
   * 'John Doe'
   */
  fullName?: string;
  /**
   * The email of the user. (Mandatory for using email module)
   * @example
   * johndoe@gmail.com
   */
  email?: string;
  /**
   * The phone of the user. (Like '+905555555555')
   * @example
   * '+905555555555'
   */
  phone?: string;
  /**
   * The login status of the user.
   * @example
   * true
   * @default false
   */
  isLogin?: Boolean;
  /**
   * The registered status of the user.
   * @example
   * true
   * @default false
   */
  isRegistered?: Boolean;
  /**
   * Gender of the user.
   * @example
   * string value sent from client
   */
  gender?: string;
  /**
   * Age of the user.
   * @example
   * string value sent from client 13
   */
  age?: string;
  /**
   * Birthdate of the user.
   * @example
   * string value sent from client '01.01.1995'
   */
  birthdate?: string;
  /**
   * Member since date of the user.
   * @example
   * string value sent from client '01.01.2015'
   */
  memberSince?: string;
  /**
   * Location of the user.
   * @example
   *  'New York' - 'Istanbul'
   */
  location?: string;
  /**
   * Segments of the user.
   * @example
   * ['Segment1', 'Segment2']
   */
  segments?: string[];
}

/**
  UserChangeEventType - This interface describes structure of UserChange event's attributes type.
 */
export interface UserChangeEventType extends CommonEventParameters {
  /**
   * The old user id of the user.
   * @example
   * '123123123'
   */
  oldUserId: string;
  /**
   * The new user id of the user.
   * @example
   * '123123123'
   */
  userId: string;
}

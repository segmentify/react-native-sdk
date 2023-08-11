import type { CommonEventParameters } from '../CommonEventParameters';
import type { TUSER_OPERATIONS_STEPS } from '../../types';

type UserOperationsSteps = typeof TUSER_OPERATIONS_STEPS;

/**
 * @typedef
 * @name UserOperations
 * @description UserOperations type is used to define the type of the user operations.
 * @property {string} step - The step of the user operations event. It can be 'signup', 'signin', 'signout' or 'update'. {@link TUSER_OPERATIONS_STEPS}
 * @property {string} username - The username of the user.
 * @property {string} fullName - The full name of the user.
 * @property {string} email - The email of the user. (Mandatory for using email module)
 * @property {string} phone - The phone of the user. (Like '+905555555555')
 * @property {boolean} isLogin - The login status of the user.
 * @property {boolean} isRegistered - The registered status of the user.
 * @property {string} gender - The registered gender of the user.
 * @property {string} age - The registered age of the user.
 * @property {string} birthdate - The registered birthdate of the user.
 * @property {string} memberSince - The registered member since date of the user.
 * @property {string} location - The registered location of the user.
 * @property {string[]} segments - The registered segments of the user.
 * @type {UserOperations}
 * @example
 *  {
 *   "step": "signup",
 *   "username": "John_Doe",
 *   "fullName": "John Doe",
 *   "email": "john@description.com",
 *   "phone": "+905555555555",
 *   "isLogin": true,
 *   "isRegistered": true,
 *   "gender": "whatyoufeel",
 *   "age": "40",
 *   "birthdate": "16.08.1993",
 *   "memberSince": "12.02.2019",
 *   "location": "New York",
 *   "segments": [
 *     "segment1",
 *     "segment2"
 *   ]
 * }
 */

export interface UserOperations extends CommonEventParameters {
  /**
   * The step of the user operations event. It can be 'signup', 'signin', 'signout' or 'update'.
   * @example
   * 'signup', 'signin', 'signout', 'update'
   */
  step: UserOperationsSteps;
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
  isLogin?: boolean;
  /**
   * The registered status of the user.
   * @example
   * true
   * @default false
   */
  isRegistered?: boolean;
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
 * @typedef
 * @name UserChangeEventType
 * @description UserChangeEventType is used to define the type of the user change event.
 * @property {string} oldUserId - The old user id of the user.
 * @property {string} userId - The new user id of the user.
 * @type {UserChangeEventType}
 * @example
 *  {
 *   "oldUserId": "123123123",
 *   "userId": "123123123"
 *   }
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

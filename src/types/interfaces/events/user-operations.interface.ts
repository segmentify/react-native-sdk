import type { SegmentifyBase } from '../segmentify-event-base.interface';
import type { TUSER_OPERATIONS_STEPS } from '../../types';

/**
 * @name UserOperationsEventType
 * @description This interface describes structure of UserOperations event's attributes type.
 * @param {TUSER_OPERATIONS_STEPS} step: The step of the user operations event. It can be 'signup', 'signin', 'signout' or 'update'.
 * @param {String} username: The username of the user.
 * @param {String} fullName: The full name of the user.
 * @param {String} email: The email of the user. (Mandatory for using email module)
 * @param {String} phone: The phone of the user. (Like '+905555555555')
 * @param {Boolean} isLogin: The login status of the user.
 * @param {Boolean} isRegistered: The registered status of the user.
 * @param {String} gender: The gender of the user. Must be either 'M' or 'F'.
 * @param {String} age: The age of the user. Must be numeric. Either use age or birthdate parameter.
 * @param {String} birthdate: The birthdate of the user. Must be in 'DD.MM.YYYY' format. Either use age or birthdate parameter.
 * @param {String} memberSince: The member since date of the user. Must be in 'DD.MM.YYYY' format.
 * @param {String} location: The location of the user. Like 'New York'.
 * @param {String[]} segments: The segments of the user. Like ['Segment1', 'Segment2'].
 * @returns UserOperationsEventType
 * @example
 * const event: UserOperationsEventType = {
 *  step: 'signup',
 *  username: 'username',
 *  fullName: 'John Doe',
 *  email: 'johndoe@gmail.com',
 *  phone: '+905555555555',
 *  isLogin: true,
 *  isRegistered: true,
 *  gender: 'M',
 *  age: '25',
 *  birthdate: '01.01.1995',
 *  memberSince: '01.01.2015',
 *  location: 'New York',
 *  segments: ['Segment1', 'Segment2']
 * }
 */
export interface UserOperationsEventType extends SegmentifyBase {
  step: typeof TUSER_OPERATIONS_STEPS;
  username?: String;
  fullName?: String;
  email?: String;
  phone?: String;
  isLogin?: Boolean;
  isRegistered?: Boolean;
  gender?: String;
  age?: String;
  birthdate?: String;
  memberSince?: String;
  location?: String;
  segments?: String[];
}

/**
 * @name UserChangeEventType
 * @description This interface describes structure of UserChange event's attributes type.
 * @param {String} oldUserId: The old user id of the user.
 * @param {String} userId: The new user id of the user.
 * @returns UserChangeEventType
 * @example
 * const event: UserChangeEventType = {
 *  oldUserId: '123456789',
 *  userId: '987654321'
 * }
 */
export interface UserChangeEventType extends SegmentifyBase {
  oldUserId: String;
  userId: String;
}

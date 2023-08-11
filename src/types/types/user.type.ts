/**
 * @typedef
 * @name Usertype
 * @description Usertype is used to define the type of the user. It is used in Segmentify API requests.
 * @property {string} [username] - User username
 * @property {string} [email] - User email
 * @property {string} [age] - User age
 * @property {string} [birthDate] - User birth date
 * @property {string} [gender] - User Gender
 * @property {string} [fullName] - User full name
 * @property {string} [mobilePhone] - User mobile phone
 * @property {string} [isRegistered] - User is registered
 * @property {boolean} [isLogin] - User is login
 * @property {string} [lastSearchDeletedKeywords] - User last search deleted keywords
 * @property {string} [userOperationStep] - User operation step
 * @property {string} [memberSince] - User member since
 * @property {string} [oldUserId] - User old user id
 * @property {string} [location] - User location
 * @property {string[]} segments - User segments
 * @type {Usertype}
 * @example
 * {
 *  "username": "johnDoe",
 *  "email": "john@description.com",
 *  "age": "40",
 *  "birthDate": "16.08.1993",
 *  "gender": "anyGenderYoufeelLike",
 *  "fullName": "John Doe",
 *  "mobilePhone": "1234567890",
 *  "isRegistered": "true",
 *  "isLogin": true,
 *  "lastSearchDeletedKeywords": "",
 *  "userOperationStep": "userOperationStep",
 *  "memberSince": "12.02.2019",
 *  "oldUserId": "12312312312312",
 *  "location": "New York",
 *  "segments": [
 *   "segment1",
 *   "segment2"
 *  ]
 * }
 */
export type User = {
  username?: string;
  email?: string;
  age?: string;
  birthDate?: string;
  gender?: string;
  fullName?: string;
  mobilePhone?: string;
  isRegistered?: string;
  isLogin?: boolean;
  lastSearchDeletedKeywords?: string;
  userOperationStep?: string;
  memberSince?: string;
  oldUserId?: string;
  location?: string;
  segments: string[];
};

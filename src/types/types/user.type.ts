/**
 * User type
 * @description
 * User type is a type that represents the user object.
 * It is used in Segmentify API requests.
 */
export type User = {
  username?: String;
  email?: String;
  age?: String;
  birthDate?: String;
  gender?: String;
  fullName?: String;
  mobilePhone?: String;
  isRegistered?: String;
  isLogin?: Boolean;
  lastSearchDeletedKeywords?: String;
  userOperationStep?: String;
  memberSince?: String;
  oldUserId?: String;
  location?: String;
  segments: String[];
};

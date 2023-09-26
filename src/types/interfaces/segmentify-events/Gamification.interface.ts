import type { CommonEventParameters } from '../CommonEventParameters';

/**
 * @typedef
 * @name Gamification
 * @description
 * Gamification is a type that describes the parameters of the gamification event.
 * @property {string} type The type of the gamification event.
 * @example
 * {
 *  name: 'GAMIFICATION',
 *  type: 'win',
 * }
 */

export interface Gamification extends CommonEventParameters {
  /**
   * The type of the gamification event.
   * @example
   * 'win'
   * @default ""
   */
  type: string;
}

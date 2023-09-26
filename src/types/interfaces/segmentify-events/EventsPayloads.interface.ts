import type {
  PageView,
  ProductView,
  BasketOperations,
  CheckOut,
  UserOperations,
  Custom,
  Interaction,
  Search,
  Gamification,
} from '.';
import type { SEGMENTIFY_EVENTS } from '../../enums';

export type KEYS_OF_EVENTS = keyof typeof SEGMENTIFY_EVENTS;

type TEventPayload = {
  PAGE_VIEW: PageView;
  PRODUCT_VIEW: ProductView;
  BASKET_OPERATIONS: BasketOperations;
  CHECKOUT: CheckOut;
  USER_OPERATIONS: UserOperations;
  CUSTOM_EVENT: Custom;
  INTERACTION: Interaction;
  SEARCH: Search;
  GAMIFICATION: Gamification;
};

/**
 * @memberof module:EventManager
 * @typedef
 * @name GenericSegmentifyEventPayload
 * @description
 * GenericSegmentifyEventPayload is a type that describes the payload of the events.
 * @property {PageView} PAGE_VIEW The payload of the PageView event.
 * @property {ProductView} PRODUCT_VIEW The payload of the ProductView event.
 * @property {BasketOperations} BASKET_OPERATIONS The payload of the BasketOperations event.
 * @property {CheckOut} CHECKOUT The payload of the CheckOut event.
 * @property {UserOperations} USER_OPERATIONS The payload of the UserOperations event.
 * @property {Custom} CUSTOM_EVENT The payload of the Custom event.
 * @property {Interaction} INTERACTION The payload of the Interaction event.
 * @property {Search} SEARCH The payload of the Search event.
 */
export type GenericSegmentifyEventPayload<T extends KEYS_OF_EVENTS> =
  TEventPayload[T];

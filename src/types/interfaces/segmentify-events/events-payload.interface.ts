import type {
  PageView,
  ProductView,
  BasketOperations,
  CheckOut,
  UserOperations,
  Custom,
  Interaction,
  Search,
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
};
// generate a generic type that depends on the value of the enum

export type GenericSegmentifyEventPayload<T extends KEYS_OF_EVENTS> =
  TEventPayload[T];

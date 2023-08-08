import type {
  PageViewEventType,
  ProductViewEventType,
  BasketOperationsEventType,
  CheckOutEventType,
  UserOperationsEventType,
  CustomEventType,
  InteractionEventType,
  SearchEventType,
} from '.';
import type { SEGMENTIFY_EVENTS } from '../../enums';

export type KEYS_OF_EVENTS = keyof typeof SEGMENTIFY_EVENTS;

type TEventPayload = {
  PAGE_VIEW: PageViewEventType;
  PRODUCT_VIEW: ProductViewEventType;
  BASKET_OPERATIONS: BasketOperationsEventType;
  CHECKOUT: CheckOutEventType;
  USER_OPERATIONS: UserOperationsEventType;
  CUSTOM_EVENT: CustomEventType;
  INTERACTION: InteractionEventType;
  SEARCH: SearchEventType;
};
// generate a generic type that depends on the value of the enum

export type GenericSegmentifyEventPayload<T extends KEYS_OF_EVENTS> =
  TEventPayload[T];

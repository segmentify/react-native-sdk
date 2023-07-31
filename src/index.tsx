export type {
  PageViewEventType,
  ProductViewEventType,
  BasketOperationsEventType,
  CheckOutEventType,
  UserOperationsEventType,
  CustomEventType,
  InteractionEventType,
  SearchEventType,
} from './types';

export { useSegmentifyStorage } from './context/SegmentifyNativeContext';
export { default as SegmentifyNativeProvider } from './context/SegmentifyNativeContext';

export {
  RequestCredentials,
  FireEvent,
  RequestPushNotificationPermission,
  HandlePushInteraction,
  HandleBackGroundNotification,
} from './event-manager';

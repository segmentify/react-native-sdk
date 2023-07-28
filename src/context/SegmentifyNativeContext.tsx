import React, { createContext, useContext, useState, useEffect } from 'react';
import { segmentifyInitialState } from './initialState';
import { useContextInitilizer } from './contextInitilizer';
import { PushNotificationPermission } from '../event-manager/push-manager/PushNotificationPermission';

import type { TContext, TSegmentifyState } from '../types';

const SegmentifyNativeContext = createContext<TSegmentifyState>(
  segmentifyInitialState
);

/**
 * Segmentify Native Provider
 * @param {Object} props - Props
 * @param {Object} props.children - Children
 * @param {Object} props.segmentify - Segmentify
 * @param {Object} props.messaging - Messaging
 * @param {Object} props.pushNotificationConfig - Push Notification Config
 * @returns {JSX.Element}
 * @constructor
 */

const SegmentifyNativeProvider = ({
  children,
  segmentify,
  messaging,
  pushNotificationConfig,
}: TContext): JSX.Element => {
  const [userReadyStatus, setUserReadyStatus] = useState<boolean>(false);
  const { config, user } = segmentify;
  const [segmentifyState, setState] = useState<TSegmentifyState>(
    segmentifyInitialState
  );

  useContextInitilizer({
    stateSetter: setState,
    ctxData: {
      config,
      user,
    },
  });

  useEffect(() => {
    if (
      segmentifyState?.segmentify?.user?.userId &&
      segmentifyState?.segmentify?.user?.sessionId &&
      !userReadyStatus
    ) {
      setUserReadyStatus(true);
      if (messaging) {
        PushNotificationPermission({
          messaging,
          pushNotificationConfig,
        });
      }
    }
  }, [
    segmentifyState?.segmentify?.user?.userId,
    segmentifyState?.segmentify?.user?.sessionId,
    messaging,
    userReadyStatus,
    pushNotificationConfig,
  ]);

  return (
    <SegmentifyNativeContext.Provider
      value={{
        segmentify: segmentifyState.segmentify,
      }}
    >
      {userReadyStatus && children}
    </SegmentifyNativeContext.Provider>
  );
};

export const useSegmentifyStorage = () => useContext(SegmentifyNativeContext);
export default SegmentifyNativeProvider;

import React from 'react';

import {SegmentifyNativeProvider} from 'segmentify-react-native-sdk';
import messaging from '@react-native-firebase/messaging';

import {providerConfig} from '../../config';

export const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <SegmentifyNativeProvider segmentify={providerConfig} messaging={messaging}>
      {children}
    </SegmentifyNativeProvider>
  );
};

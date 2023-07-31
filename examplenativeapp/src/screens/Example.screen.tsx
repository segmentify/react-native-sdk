import React from 'react';
import {Text} from 'react-native';
import {useSegmentifyStorage, FireEvent} from '@segmentify/react-native-sdk';

export const Example = ({navigation, route}) => {
  console.log('Example.screen', route.params!.item.productId);
  const {segmentify} = useSegmentifyStorage();

  return <Text>Example.screen</Text>;
};

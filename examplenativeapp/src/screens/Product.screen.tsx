import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSegmentifyStorage, FireEvent} from 'react-native-sdk';

import type {RootStackParamList} from '../router/Router';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const Product = ({navigation, route}: Props) => {
  const {segmentify} = useSegmentifyStorage();

  FireEvent({
    type: 'PRODUCT_VIEW',
    eventPayload: {
      name: 'PRODUCT_VIEW',
      productId: route.params!.item.productId,
      userId: segmentify?.user?.userId,
      sessionId: segmentify?.user?.sessionId,
    },
  }).then(() => {
    FireEvent({
      type: 'INTERACTION',
      eventPayload: {
        name: 'INTERACTION',
        type: 'VIEW',
        productId: route.params!.item.productId,
        userId: segmentify?.user?.userId,
        sessionId: segmentify?.user?.sessionId,
      },
    }).then(() => {
      console.log('Product Interaction Event Sent');
    });
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: route.params!.item.image,
        }}
      />
      <Text style={styles.name}>
        {route.params!.item.price + route.params!.item.currency}
      </Text>
      <Text style={styles.name}>{route.params!.item.name}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {width: 380, height: 200},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
});

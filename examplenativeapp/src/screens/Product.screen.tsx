import React, { useCallback, useEffect } from 'react';
import { useToast } from 'native-base';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSegmentifyStorage, FireEvent} from '@segmentify/react-native-sdk';

import type {RootStackParamList} from '../router/Router';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const Product = ({navigation, route}: Props) => {
  const {segmentify} = useSegmentifyStorage();
  const toast = useToast();
  console.log('Product', route.params!.item.productId);
  
  const getProductDetails = useCallback(async () => {
    FireEvent({
      type: 'PRODUCT_VIEW',
      eventPayload: {
        name: 'PRODUCT_VIEW',
        productId: route.params!.item.productId,
        userId: segmentify?.user?.userId,
        sessionId: segmentify?.user?.sessionId,
      },
    }).then(() => {
      toast.show({
        title: 'Product View Event Sent',
        description: 
          'productId: ' + route.params!.item.productId + '\n' +
          'userId: ' + segmentify?.user?.userId + '\n' +
          'sessionId: ' + segmentify?.user?.sessionId,
        placement: 'bottom',
      });
      console.log('Product View Event Sent');
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
        toast.show({
          title: 'Product Interaction Event Sent',
          description: 
          'productId: ' + route.params!.item.productId + '\n' +
          'userId: ' + segmentify?.user?.userId + '\n' +
          'sessionId: ' + segmentify?.user?.sessionId,
          placement: 'bottom',
        });
        console.log('Product Interaction Event Sent');
      });
    });
  }, [route.params!.item.productId]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

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

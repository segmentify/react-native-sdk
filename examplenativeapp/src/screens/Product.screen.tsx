import React, {useCallback, useEffect} from 'react';
import {useToast} from 'native-base';
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
    const sendProductViewEvent = await FireEvent({
      type: 'PRODUCT_VIEW',
      eventPayload: {
        name: 'PRODUCT_VIEW',
        productId: route.params!.item.productId,
        userId: segmentify?.user?.userId,
        sessionId: segmentify?.user?.sessionId,
        lang: 'TR',
        os: 'android',
        device: 'android',
      },
    });

    const sendProductInteractionEvent = await FireEvent({
      type: 'INTERACTION',
      eventPayload: {
        name: 'INTERACTION',
        type: 'VIEW',
        productId: route.params!.item.productId,
        userId: segmentify?.user?.userId,
        sessionId: segmentify?.user?.sessionId,
        lang: 'TR',
        os: 'android',
        device: 'android',
      },
    });
    await Promise.all([sendProductViewEvent, sendProductInteractionEvent]).then(
      () => {
        toast.show({
          title: 'Product View Event Sent',
          description:
            'productId: ' +
            route.params!.item.productId +
            '\n' +
            'userId: ' +
            segmentify?.user?.userId +
            '\n' +
            'sessionId: ' +
            segmentify?.user?.sessionId,
          placement: 'bottom',
        });
        console.log('Product View Event Sent');
        toast.show({
          title: 'Product Interaction Event Sent',
          description:
            'productId: ' +
            route.params!.item.productId +
            '\n' +
            'userId: ' +
            segmentify?.user?.userId +
            '\n' +
            'sessionId: ' +
            segmentify?.user?.sessionId,
          placement: 'bottom',
        });
        console.log('Product Interaction Event Sent');
      },
    );

    console.log('route.params!.item.productId', route.params!.item.productId);
  }, [route.params!.item.productId]);

  const MemoizedElement = React.useMemo(() => {
    console.log('MemoizedElement');
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
  }, [route.params!.item.productId]);

  useEffect(() => {
    getProductDetails();
  }, []);

  return MemoizedElement;
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

//TODO: Search Interaction Eventi gönderilecek Seachten sonra
//TODO: Recommendation icin impression eventi gonderilecek
//TODO: Interaction eventi icin type 'IMPRESSION'| 'WIDGET_VIEW' | 'CLICK' olacak

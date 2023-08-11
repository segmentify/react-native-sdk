import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import { Button, Text, HStack, ScrollView, VStack, ArrowForwardIcon } from 'native-base';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSegmentifyStorage, FireEvent} from '@segmentify/react-native-sdk';
import type {RootStackParamList} from '../router/Router';
import { useToast } from "react-native-toast-notifications";


type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const Product = ({navigation, route}: Props) => {
  const {width, height} = Dimensions.get('window');
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
        toast.show(
          "",
          {
            type: "custom_toast",
            animationDuration: 100,
            data: {
              title: 'Product View Event Sent',
              messages: {
                'productId': route.params!.item.productId,
                'userId': segmentify?.user?.userId,
                'sessionId': segmentify?.user?.sessionId,
              }
            },
          }
        )
        toast.show(
          "",
          {
            type: "custom_toast",
            animationDuration: 100,
            data: {
              title: 'Product Interaction Event Sent',
              messages: {
                'productId': route.params!.item.productId,
                'userId': segmentify?.user?.userId,
                'sessionId': segmentify?.user?.sessionId,
              }
            },
          }
        )
        console.log('Product View Event Sent');
        console.log('Product Interaction Event Sent');
      },
    );

    console.log('route.params!.item.productId', route.params!.item.productId);
  }, [route.params!.item.productId]);

  const DummyExtraTitle = ({title}: {title: string}) => {
    return (
      <View style={ProductScreenStyles(width, height).dummySubTitle}>
        <Text style={{color: '#7d7d7d', fontSize: 16, textAlign: 'right', fontWeight: 'bold'}}>
          {title}
        </Text>
        <ArrowForwardIcon size="sm" color="#7d7d7d" marginTop={1} />
      </View>
    );
  };

  const ProductDetails = () => {
    return (
      <View style={ProductScreenStyles(width, height).containerScrollView}>
        <ScrollView>
            <Image
              style={ProductScreenStyles(width, height).image}
              source={{
                uri: route.params!.item.imageS,
              }}
            />
            <View style={ProductScreenStyles(width, height).containerInsideView}>
              <Text style={{color: '#7d7d7d', fontSize: 12, textAlign: 'right'}}>
                {route.params!.item.category}
              </Text>
              <Text style={ProductScreenStyles(width, height).name}>
                <Text style={{color: '#ff6000'}}>
                  {route.params!.item.brand}{' '}
                </Text>
                {route.params!.item.name}
              </Text>

              <VStack alignItems="flex-start" justifyContent="flex-start" width="100%" height="100%">
                <DummyExtraTitle title="Ürün Açıklamaları" />
                <DummyExtraTitle title="Ürün Özellikleri" />
                <DummyExtraTitle title="Ürün Yorumları" />
                <DummyExtraTitle title="Ürün Soru ve Cevapları" />
                <DummyExtraTitle title="Ürün Hakkında" />
              </VStack>
            </View>
        </ScrollView>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={ProductScreenStyles(width, height).footer}>
        <HStack alignItems="center" justifyContent="space-between" width="100%" height="100%" padding={2}>
          <VStack alignItems="flex-start" justifyContent="center" width="50%" height="100%">
            {route.params!.item.oldPriceText && (
                <Text
                  fontSize="md"
                  fontWeight="400"
                  color="gray.500"
                  marginBottom={-2}
                  strikeThrough>
                  {route.params!.item.oldPriceText}
                </Text>
            )}
              <Text
                fontSize="2xl"
                fontWeight="600"
                marginLeft={2}
                color={route.params!.item.oldPriceText ? 'green.600' : 'gray.600'}>
                {route.params!.item.priceText}
              </Text>
          </VStack>
          <Button
            style={ProductScreenStyles(width, height).footerButton}
            onPress={() => {
              console.log('Add To Basket');
            }}>
            <Text style={ProductScreenStyles(width, height).footerButtonText}>
              Add To Basket
            </Text>
          </Button>
        </HStack>
      </View>
    );
  };

  const MemoizedElement = React.useMemo(() => {
    console.log('MemoizedElement');
    return (
      <View style={ProductScreenStyles(width, height).container}>
        <ProductDetails />
        <Footer />
      </View>
    );
  }, [route.params!.item.productId]);

  useEffect(() => {
    getProductDetails();
  }, []);

  return MemoizedElement;
};

export const ProductScreenStyles = (windowWidth: number, windowHeight: number) => {
  const footerHeight = 80;
  const fhPixelHeightAsPercent = (footerHeight / windowHeight) * 100;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      position: 'relative',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    containerScrollView: {
      flex: 1 - fhPixelHeightAsPercent / 100,
    },
    containerInsideView: {
      flex: 1,
      position: 'relative',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 10,
    },
    image: {
      width: windowWidth,
      height: windowHeight / 2,
      resizeMode: 'contain',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 4,
      marginBottom: 10,
    },
    dummySubTitle: {
      width: '100%',
      padding: 10,
      marginVertical: 4,
      backgroundColor: '#f7f7f7',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#e3e3e3',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
    footer: {
      flex: fhPixelHeightAsPercent / 100,
      position: 'absolute',
      height: `${fhPixelHeightAsPercent}%`,
      bottom: 0,
      width: windowWidth,
      borderTopWidth: 1,
      borderTopColor: '#e3e3e3',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerButton: {
      position: 'relative',
      backgroundColor: '#ff6000',
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
    },
    footerButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

import React, {useState, useEffect, useCallback} from 'react';
import {FireEvent} from '@segmentify/react-native-sdk';
import {PAGE_VIEW_EVENT_EXAMPLE} from '../example/events';
import {HStack, ScrollView, Skeleton, Text, VStack, View} from 'native-base';
import {ProductCardList} from '../components/ProductCard/ProductCardList';
import {useToast} from 'react-native-toast-notifications';

export const Home = () => {
  const toast = useToast();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<any>({});

  type IRecommendationList = {
    [key: string]: {
      name?: string;
      products?: any[];
    };
  };

  const getRecommendedProducts = useCallback(async () => {
    setIsLoaded(false);
    const response = await FireEvent({
      type: 'PAGE_VIEW',
      eventPayload: PAGE_VIEW_EVENT_EXAMPLE,
    });
    let recommendationList: IRecommendationList = {};

    response?.responses[0]?.forEach((item: any) => {
      const algorithmKeys: string[] = Object.keys(
        item.params?.recommendedProducts,
      );
      const recoInstanceId: string = item.params?.instanceId;
      const recoName: string = item.params?.notificationTitle;

      const recoProducts: any[] = algorithmKeys.map(key => {
        const products: any[] = item.params?.recommendedProducts[key];
        return products;
      });

      recommendationList[recoInstanceId] = {
        name: recoName,
        products: recoProducts.flat(),
      };
    });

    Object.keys(recommendationList).forEach((key: string) => {
      const productNames = recommendationList?.[key]?.['products']?.map(
        (product: any) => product.name,
      );
      console.log(recommendationList?.[key]?.['name'], productNames);
    });
    console.groupEnd();

    setRecommendations(recommendationList);
    setIsLoaded(true);
    toast.show('', {
      type: 'custom_toast',
      animationDuration: 100,
      data: {
        title: 'Page View Event Sent',
        messages: {
          category: PAGE_VIEW_EVENT_EXAMPLE.category,
        },
      },
    });
    console.log('Page View Event Sent');
  }, []);

  useEffect(() => {
    getRecommendedProducts();
  }, [getRecommendedProducts]);

  return (
    <ScrollView pt={4}>
      {Object.keys(recommendations).map((key: string) => {
        const {name, products} = recommendations[key];
        if (products.length === 0) {
          return null;
        }

        if (!isLoaded) {
          return (
            <VStack key={key} mb={8} p={3}>
              <Skeleton height={8} width="65%" />
              <HStack
                justifyContent="space-between"
                alignItems="center"
                mt={2}
                space={4}>
                <Skeleton height={250} width="200" />
                <Skeleton height={250} width="200" />
                <Skeleton height={250} width="200" />
                <Skeleton height={250} width="200" />
              </HStack>
            </VStack>
          );
        }

        return (
          <View key={key} mb={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={2} ml={3}>
              {name}
            </Text>
            <ProductCardList
              productList={products}
              cardSize={200}
              isHorizontal={true}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

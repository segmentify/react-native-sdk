import React, {useState, useEffect, useCallback} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../router/Router';
import {FireEvent} from 'segmentify-react-native';
import {PAGE_VIEW_EVENT_EXAMPLE} from '../example/events';
import {ParallaxCarousel} from '../components/ParallaxCarousel.component';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: Props) => {
  const [recommendedProducts, setRecommendedProducts] = useState<any>([]);

  const getRecommendedProducts = useCallback(async () => {
    const response = await FireEvent({
      type: 'PAGE_VIEW',
      eventPayload: PAGE_VIEW_EVENT_EXAMPLE,
    });
    let data = {};
    response?.responses[0]?.forEach((item: any) => {
      data = {
        ...data,
        ...item?.params.recommendedProducts,
      };
    });
    setRecommendedProducts(data['RECOMMENDATION_SMART_OFFERS|TODAY|NONE']);
  }, []);

  useEffect(() => {
    getRecommendedProducts();
  }, [getRecommendedProducts]);

  return (
    <>
      <ParallaxCarousel
        title="Top Sellers Today 🎖️"
        productArray={recommendedProducts}
        navigation={navigation}
      />
      <ParallaxCarousel
        title="Hot Offers 🔥"
        productArray={recommendedProducts}
        navigation={navigation}
        autoPlay={false}
        showPagination={false}
      />
    </>
  );
};

import React from 'react';
import {ProductCard} from './ProductCard';
import type {ISearchResponse} from '../../types/search-response.interface';
import {ScrollView, View} from 'native-base';

export const ProductCardList = ({
  productList,
  shownProductLength = 10,
  cardSize = '100%',
  isHorizontal = false,
}: {
  productList: ISearchResponse[];
  shownProductLength?: number;
  cardSize?: number | string;
  isHorizontal?: boolean;
}) => {
  const fixedProductList = productList?.slice(0, shownProductLength) || [];

  if (fixedProductList.length === 0) {
    return null;
  }

  return (
    <ScrollView
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={isHorizontal}>
      <View flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {fixedProductList.map((item, index) => (
          <ProductCard
            item={item}
            key={index}
            cardSize={cardSize}
            isHorizontal={isHorizontal}
          />
        ))}
      </View>
    </ScrollView>
  );
};

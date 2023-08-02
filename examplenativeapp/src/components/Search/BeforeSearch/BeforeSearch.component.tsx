import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack, ScrollView, View, Heading } from 'native-base';
import {BeforeSearchBadge} from './BeforeSearchBadge.component';
import { BeforeSearchBanner } from './BeforeSearchBanner.component';
import { ProductCardList } from '../../ProductCard/ProductCardList';

type BeforeSearchProps = {
  beforeSearch?: any;
  setSearchQuery?: any;
};

export const BeforeSearch = ({beforeSearch, setSearchQuery}: BeforeSearchProps) => {
  console.log('BeforeSearch', beforeSearch)
  return (
    <ScrollView>
      <VStack space="1">
        <BeforeSearchBanner banners={beforeSearch?.banners}/>
        <BeforeSearchBadge renderItem={Object.keys(beforeSearch?.brands)} header="Popular Brands 🔥" setSearchQuery={setSearchQuery}/>
        <BeforeSearchBadge renderItem={Object.keys(beforeSearch?.keywords)} header="Popular Keywords 🔥" setSearchQuery={setSearchQuery}/>
        {
          beforeSearch?.products?.length > 0 && (
            <View style={styles.container}>
              <Heading size="md" ml="2" mb="3">Popular Products 🔥</Heading>
              <ProductCardList productList={beforeSearch?.products} cardSize="50%" />
            </View>
          )
        }
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    textAlign: 'left',
    justifyContent: 'center',
    padding: 4,
    paddingTop: 10,
  }
});
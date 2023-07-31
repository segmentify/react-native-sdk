import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View, Skeleton, Center, VStack, SearchIcon } from 'native-base';
import { ProductCardList } from '../ProductCard/ProductCardList';

type SearchResultsProps = {
  searchProducts?: any;
};

export const SearchResults = ({searchProducts}: SearchResultsProps) => {
  if (searchProducts === 'loading') {
    return (
      <Center>
        <VStack w="100%" h="100%" space={4} overflow="hidden" p={4}>
          <View flexDirection="row" flexWrap="wrap" justifyContent="space-between">
            {Array.from(Array(15).keys()).map((_item, index) => (
              <Skeleton key={index} w="48%" h="280" mb="4" rounded="md" />
            ))}
          </View>
        </VStack>
      </Center>
    );
  }

  if (searchProducts.length === 0) {
    return (
      <View style={styles.container}>
        <VStack space={2} style={styles.container}>
          <SearchIcon size="90" color="gray.400" />
          <Text style={styles.renderContainer.text}>
            There is no product found
          </Text>
        </VStack>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductCardList productList={searchProducts} cardSize="50%" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    paddingTop: 10,
  },
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
    image: {
      width: 80,
      height: 80,
    },
    textContainer: {
      width: 350,
    },
    text: {
      fontSize: 16,
      padding: 10,
    },
  },
});

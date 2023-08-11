import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {View, Skeleton, Center, VStack, SearchIcon, Stack, Heading} from 'native-base';
import {ProductCardList} from '../ProductCard/ProductCardList';
import {BeforeSearch} from './BeforeSearch/BeforeSearch.component';
import { AfterSearchBanner } from './AfterSearch/AfterSearchBanner.component';
import {FireEvent} from '@segmentify/react-native-sdk';
import {SEARCH_EVENT_EXAMPLE} from '../../example/events';

type SearchResultsProps = {
  searchProducts?: any;
  setSearchQuery?: any;
  searchBanners?: any;
};

export const SearchResults = ({searchProducts, setSearchQuery, searchBanners}: SearchResultsProps) => {
  const [beforeSearch, setBeforeSearch] = React.useState<any>(null);

  const handleBeforeSearch = React.useCallback(async () => {
    setBeforeSearch('loading');
    await FireEvent({
      type: 'SEARCH',
      eventPayload: {
        ...SEARCH_EVENT_EXAMPLE,
      },
    }).then((res:any) => {
      if(res?.search[0][0]){
        setBeforeSearch(res?.search[0][0]);
      } else {
        setBeforeSearch(null);
      }
    }).catch((err:any) => {
      setBeforeSearch(null);
      console.log(err);
    });
  }, [searchProducts]);


  React.useEffect(() => {
    handleBeforeSearch();
  }, [handleBeforeSearch]);

  if (searchProducts === 'loading') {
    return (
      <Center>
        <VStack w="100%" h="100%" space={4} overflow="hidden" p={4}>
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between">
              <Skeleton w="100%" h="150" mb="4" rounded="md" />
              <Skeleton w="60%" ml="20%" h="8" mb="2" rounded="md" justifyContent="center" />
            {Array.from(Array(15).keys()).map((_item, index) => (
              <Skeleton key={index} w="48%" h="280" mb="4" rounded="md" />
            ))}
          </View>
        </VStack>
      </Center>
    );
  }

  if (beforeSearch === 'loading') {
    return (
      <Center>
        <VStack w="100%" h="100%" space={4} overflow="hidden" p={4}>
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between">
              <Skeleton w="100%" h="150" mb="4" rounded="md" />

              <Skeleton w="30%" h="8" mb="2" rounded="md" />
              <Skeleton w="100%" h="6" mb="2" rounded="md" />
              <Skeleton w="30%" h="8" mb="2" rounded="md" />
              <Skeleton w="100%" h="6" mb="2" rounded="md" />
              <Skeleton w="30%" h="8" mb="2" rounded="md" />
              <Skeleton w="100%" h="6" mb="2" rounded="md" />

              <Skeleton w="30%" h="8" mb="2" rounded="md" />
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
      <>
      {beforeSearch && beforeSearch !== 'loading' && beforeSearch?.banners.length > 0 ? (
        <BeforeSearch beforeSearch={beforeSearch} setSearchQuery={setSearchQuery}/>
      ):(
      <View style={styles.container}>
        <VStack space={2} style={styles.container}>
          <SearchIcon size="90" color="gray.400" />
          <Text style={styles.renderContainer.text}>
            There is no product found
          </Text>
        </VStack>
      </View>
      )}
      </>
    );
  }

  return (
    <View style={styles.container}>
      {searchBanners && searchBanners.length > 0 && (
        <>
          <AfterSearchBanner banners={searchBanners}/>
          <Stack ml="2" direction="row" space={3}>
            <Heading size="md" mt="4" mb="2">Search Results</Heading>
          </Stack>
        </>
      )}
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

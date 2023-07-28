import React, {useCallback} from 'react';
import {Skeleton, Center, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {FireEvent, useSegmentifyStorage} from '@segmentify/react-native-sdk';
import type {ISearchResponse} from '../../types/search-response.interface';
import {SearchIcon} from 'native-base';

type SearchResultsProps = {
  searchProducts?: any;
};

export const SearchResults = ({searchProducts}: SearchResultsProps) => {
  const navigation = useNavigation();
  const {
    segmentify: {user},
  } = useSegmentifyStorage();
  const onClickHandler = useCallback(
    async (item: ISearchResponse) => {
      FireEvent({
        type: 'INTERACTION',
        eventPayload: {
          name: 'INTERACTION',
          type: 'CLICK',
          productId: item.productId,
          userId: user?.userId,
          sessionId: user?.sessionId,
        },
      }).then(() => {
        console.log('Product CLICK Event Sent');
      });
      // @ts-ignore
      navigation.navigate('Product', {item});
    },
    [user, navigation],
  );

  console.log('searchProducts', searchProducts);

  if (searchProducts === 'loading') {
    return (
      <Center>
        <VStack w="100%" h="100%" space={4} overflow="hidden" p={4}>
          {Array.from(Array(15).keys()).map((item, index) => (
            <Skeleton key={index} h="20" />
          ))}
        </VStack>
      </Center>
    );
  }

  return (
    <View>
      {searchProducts.length > 0 && (
        <>
          <FlatList
            data={searchProducts}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.renderContainer}
                onPress={() => onClickHandler(item)}>
                <Image
                  source={{uri: item.image}}
                  style={styles.renderContainer.image}
                />
                <View style={styles.renderContainer.textContainer}>
                  <Text style={styles.renderContainer.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.productId}
          />
        </>
      )}

      {searchProducts.length === 0 && (
        // <View style={styles.container}>
        //   <Text style={styles.renderContainer.text}>
        //     There is no product found
        //   </Text>
        // </View>
        <VStack space={2} style={styles.container}>
          <SearchIcon size="90" color="gray.400" />
          <Text style={styles.renderContainer.text}>
            There is no product found
          </Text>
        </VStack>
      )}
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

import React, {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useSegmentifyStorage, FireEvent} from 'segmentify-react-native-sdk';
import {SearchBarMime} from './SearchBarMime.component';
import {SEARCH_EVENT_EXAMPLE} from '../../example/events';

export const SearchBar = ({
  isMime = false,
  setSearchProducts,
}: {
  isMime?: boolean;
  setSearchProducts: any;
}) => {
  const navigation = useNavigation();
  const {
    segmentify: {user},
  } = useSegmentifyStorage();
  const [inputValue, setInputValue] = useState<string>('');

  const getSearchProducts = useCallback(
    async ({query}: {query: string}) => {
      if (query.length >= 1) {
        setSearchProducts('loading');
        await FireEvent({
          type: 'SEARCH',
          eventPayload: {
            ...SEARCH_EVENT_EXAMPLE,
            query,
            userId: user?.userId,
            sessionId: user?.sessionId,
          },
        }).then(res => {
          const products = res?.search[0][0]?.products;
          setSearchProducts(products);
        });
      } else {
        setSearchProducts([]);
      }
    },
    [user?.userId, user?.sessionId, setSearchProducts],
  );

  const onSearchHandler = useCallback(
    (text: string) => {
      setInputValue(text);
    },
    [setInputValue],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchProducts({query: inputValue});
      console.log('onSearchHandler', inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, getSearchProducts]);

  return (
    <SearchBarMime
      navigation={navigation}
      isMime={isMime}
      inputValue={inputValue}
      onSearchHandler={onSearchHandler}
    />
  );
};

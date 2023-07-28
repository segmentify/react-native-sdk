import React from 'react';
import {View} from 'react-native';
import {SearchResults} from '../components/Search/SearchResults.component';

export const Search = ({searchProducts = []}: any) => {
  return (
    <View>
      <SearchResults searchProducts={searchProducts} />
    </View>
  );
};

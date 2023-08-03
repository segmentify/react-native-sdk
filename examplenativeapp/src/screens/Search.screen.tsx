import React from 'react';
import {View} from 'react-native';
import {SearchResults} from '../components/Search/SearchResults.component';

type SearchProps = {
  searchProducts?: any;
  setSearchQuery?: any;
  searchBanners?: any;
};

export const Search = ({searchProducts = [], setSearchQuery, searchBanners}: SearchProps) => {
  return (
    <View>
      <SearchResults searchProducts={searchProducts} setSearchQuery={setSearchQuery} searchBanners={searchBanners}/>
    </View>
  );
};

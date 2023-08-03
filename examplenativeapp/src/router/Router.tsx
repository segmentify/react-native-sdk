import React, {useState} from 'react';
import {Providers} from '../provider/Providers';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {Home, Product, Search} from '../screens/';

// Components
import {SearchBar} from '../components/index';

export type RootStackParamList = {
  Home: any;
  Product: any;
  Search: any;
};

const Stack = createNativeStackNavigator();

const SearchBarComponent = (props: any) => {
  console.log('SearchBarComponent', props);
  return <SearchBar {...props} />;
};

export const Router = () => {
  const [searchProducts, setSearchProducts] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchBanners, setSearchBanners] = useState<any>([]);

  return (
    <NavigationContainer>
      <Providers>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            contentStyle: {backgroundColor: '#FFFFFF'},
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => SearchBarComponent({isMime: true}),
            }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{title: 'Product Page'}}
            initialParams={{item: {}}}
          />
          <Stack.Screen
            name="Search"
            options={{
              headerTitle: () => SearchBarComponent({setSearchProducts, searchQuery, setSearchQuery, setSearchBanners}),
              headerTintColor: '#7d7d7d',
              headerBackTitleVisible: false,
            }}>
            {props => <Search {...props} searchProducts={searchProducts} setSearchQuery={setSearchQuery} searchBanners={searchBanners}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </Providers>
    </NavigationContainer>
  );
};



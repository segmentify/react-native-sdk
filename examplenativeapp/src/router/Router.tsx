import React, {useState} from 'react';
import {Providers} from '../provider/Providers';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EngagementManager} from '@segmentify/react-native-sdk';
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
  return <SearchBar {...props} />;
};

export const Router = () => {
  const [searchProducts, setSearchProducts] = useState<any>([]);
  return (
    <NavigationContainer onStateChange={state => console.log('state', state)}>
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
          />
          <Stack.Screen
            name="Search"
            options={{
              headerTitle: () => SearchBarComponent({setSearchProducts}),
              headerTintColor: '#7d7d7d',
              headerBackTitleVisible: false,
            }}>
            {props => <Search {...props} searchProducts={searchProducts} />}
          </Stack.Screen>
        </Stack.Navigator>
      </Providers>
    </NavigationContainer>
  );
};

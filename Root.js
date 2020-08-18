import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import RestaurantList from './src/screens/RestaurantList';


const RootStack = createStackNavigator(
  {
    RestaurantList
  },
  {
    initialRouteName: 'RestaurantList',
  },
);

const AppContainer = createAppContainer(RootStack);

class Router extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Router;
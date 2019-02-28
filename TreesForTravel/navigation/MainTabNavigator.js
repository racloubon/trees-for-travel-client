import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'My Trees',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-leaf` : 'md-leaf'
      }
    />
  ),
};

const DetailsStack = createStackNavigator({
  Details: DetailsScreen,
});

DetailsStack.navigationOptions = {
  tabBarLabel: 'My Flights',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  DetailsStack,
});

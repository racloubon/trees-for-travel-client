import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen';

export default createAppContainer(createSwitchNavigator({
  Home: SplashScreen,
  Main: MainTabNavigator,
}));

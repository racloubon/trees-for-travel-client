import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen';

export default createAppContainer(createSwitchNavigator({
  Home: SplashScreen,
  Main: MainTabNavigator,
}));


// You could add another route here for authentication.
// Read more at https://reactnavigation.org/docs/en/auth-flow.html

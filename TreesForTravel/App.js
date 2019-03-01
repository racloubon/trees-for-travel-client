import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Redux/reducers.js'


//Components
import AppNavigator from './navigation/AppNavigator';

const store = createStore(reducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <View style={{flex: 1}}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
  }
}

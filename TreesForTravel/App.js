import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

import TitleBar from './components/titleBar.js';
import AddFlightContainer from './components/addFlightContainer.js';
import NavSlider from './components/navSlider.js';

//export default class App extends React.Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <TitleBar />
//         <AddFlightContainer />
//         <AppNavigator />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

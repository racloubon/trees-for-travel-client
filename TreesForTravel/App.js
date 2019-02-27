import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TitleBar from './components/titleBar.js';
import AddFlightContainer from './components/addFlightContainer.js';
import Forest from './components/forest.js';
import NavSlider from './components/navSlider.js';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TitleBar />
        <AddFlightContainer />
        <Forest />
        <NavSlider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

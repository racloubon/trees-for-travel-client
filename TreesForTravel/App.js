import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import TitleBar from './components/titleBar.js';
import AddFlightContainer from './components/addFlightContainer.js';
import NavSlider from './components/navSlider.js';

const { width, height } = Dimensions.get('window');
//import SlidingPanel from 'react-native-sliding-up-down-panels';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TitleBar />
        <AddFlightContainer />
        <Button title="My Flights" color="#4A4A48" onPress={() => console.log('my flights pressed')}>My Flights</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

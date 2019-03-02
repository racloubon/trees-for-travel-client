import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Tree from './tree.js';

const forest = (props) => {
  return (
    <View style={styles.container}>
      {
        props.flights.map((flight, i) => flight.treesToOffset.map((flight, j) => <Tree key={i + j}/>))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.7,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
});


export default forest;

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Tree from './tree.js';

const forest = (props) => {
  return (
    <View style={{flex: 9, backgroundColor: '#F1F2EB', flexDirection: 'row', flexWrap: 'wrap'}}>
      {
        props.flights.map((flight, i) => flight.treesToOffset.map((flight, j) => <Tree key={i + j}/>))
      }
    </View>
  )
}


export default forest;

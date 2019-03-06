import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import posed from 'react-native-pose';

import DataFunctions from '../dataProcessing/functions.js'

const Summary = posed.View({
  visible: { opacity: 0.88 },
  hidden: { opacity: 0 }
});

const summaryBar = ({ flights, isVisible }) => {

  const treesNeeded = Math.ceil(flights.reduce((acc, flight) => acc + flight.treesToOffset.length/10, 0))


    return flights.length
      ? <Summary pose={isVisible ? 'visible' : 'hidden'} style={styles.container}>
            <Text style={styles.body}>
              {flights.length} {flights.length === 1 ? "flight" : "flights"}
            </Text>
            <Text style={styles.body2}>
              {DataFunctions.formatNumbers(flights.reduce((acc, flight) => acc + flight.distance, 0))}km
            </Text>
            <Text style={styles.body}>
              {DataFunctions.formatNumbers(Math.round(flights.reduce((acc, flight) => acc + flight.carbonFootprint, 0)/1000))}g carbon emitted
            </Text>
            <Text style={styles.body2}>
              {treesNeeded} {treesNeeded === 1 ? 'tree' : 'trees'} needed
            </Text>
        </Summary>
    : <View style={styles.containerAddFlight}><Text style={styles.body}>Add a flight to begin</Text></View>
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  containerAddFlight: {
    margin: 10,
    padding: 52,
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    margin: 4,
    color: '#F1F2EB',
    fontWeight: 'bold',
    letterSpacing: 0.9
  },
  body2: {
    fontSize: 18,
    textAlign: 'center',
    margin: 4,
    color: '#A4C2A5',
    fontWeight: 'bold',
    letterSpacing: 0.9
  },
});


export default summaryBar;

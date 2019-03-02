import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const summaryBar = (props) => {
  return (<View style={styles.container}>

            <Text style={styles.body}>
              {props.flights.length} {props.flights.length === 1 ? "flight" : "flights"}
            </Text>

            <Text style={styles.body}>
              {props.flights.reduce((acc, flight) => acc + flight.distance, 0)}km
            </Text>

            <Text style={styles.body}>
              {Math.round(props.flights.reduce((acc, flight) => acc + flight.carbonFootprint, 0)/100)}kg carbon emitted
            </Text>

            <Text style={styles.body}>
              {props.flights.reduce((acc, flight) => acc + flight.treesToOffset.length, 0)} trees needed
            </Text>

        </View>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.7,
    margin: 10,
    padding: 10,
  },
  body: {
    fontSize: 19,
    textAlign: 'center',
    margin: 2,
    color: 'white'
  },
});


export default summaryBar;

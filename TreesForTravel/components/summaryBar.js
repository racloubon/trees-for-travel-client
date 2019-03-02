import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const summaryBar = (props) => {
  return (<View>
            <Text>{props.flights.length} {props.flights.length === 1 ? "flight" : "flights"} taken </Text>
            <Text>{props.flights.reduce((acc, flight) => acc + flight.distance, 0)}km Travelled </Text>
            <Text>{Math.round(props.flights.reduce((acc, flight) => acc + flight.carbonFootprint, 0)/100)}kg carbon emissions</Text>
            <Text>{props.flights.reduce((acc, flight) => acc + flight.treesToOffset.length, 0)} trees needed to Offset</Text>
        </View>)
}


export default summaryBar;

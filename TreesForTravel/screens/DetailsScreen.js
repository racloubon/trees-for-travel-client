import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class DetailsScreen extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       flights: []
     };
   }

   getFlights = async () => {
     try {
       const flightsData = await fetch('http://192.168.1.187:3000/flights');
       const flights = await flightsData.json()
       this.setState({flights});
       console.log(this.state.flights)
     } catch (e) {
       console.log('error with getting flights: ' + e)
     }
   }

   deleteFlight = async () => {
     try {
       let response = await fetch('http://192.168.1.187:3000/flights', {
         method: 'POST',
         headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
         body: JSON.stringify(flightData),
       });
     } catch (e) {

     }
   }

  static navigationOptions = {
    title: 'My Flights',
  };

  componentDidMount = () => {
    this.getFlights()
  }

  render() {
    return (
      <ScrollView>
        {this.state.flights
          .map((flight, i) => {
            return (
              <View style={{backgroundColor: "#D8DAD3", margin: 10}} key={i}>
                <Text>From: {flight.origin}</Text>
                <Text>To: {flight.destination}</Text>
                <Text>Distance: {flight.distance}km</Text>
                <Text>Carbon Emissions: {Math.round(flight.carbonFootprint/100)}kg</Text>
                <Text>Trees Needed: {flight.treesToOffset.length}</Text>
                <Button title="Delete Flight" color="#4A4A48" onPress={() => console.log(flight)}>Delete Flight</Button>
              </View>
            )
          })}
      </ScrollView>
    );
  }
}

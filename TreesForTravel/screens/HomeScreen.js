import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import TitleBar from '../components/titleBar.js';
import Forest from '../components/forest.js';

import Cities from '../data/cities.json';

export default class HomeScreen extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       origin: '',
       destination: '',
       flights: []
     };
   }

  static navigationOptions = {
    title: 'Home',
  };

  calculateDistanceInKm = (lat1, lon1, lat2, lon2) => {
   var R = 6371; // Radius of the earth in km
   var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
   var dLon = (lon2 - lon1) * Math.PI / 180;
   var a =
       0.5 - Math.cos(dLat)/2 +
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLon))/2;

   return R * 2 * Math.asin(Math.sqrt(a));
  }

  analyseFlight = (origin, destination) => {

    const originData = Cities.find(data => data.city === origin);
    const destinationData = Cities.find(data => data.city === destination);
    const distance = Math.trunc(this.calculateDistanceInKm(originData.lat, originData.lng, destinationData.lat, destinationData.lng));
    const carbonFootprint = distance*115 //in grams
    const treesNeeded = Math.round(carbonFootprint/900000)*10 //in grams, assuming one tree absorbs 1 ton in its lifetime; currently one tree = 1/10th of a tree because otherwise they're too small

    const newFlight = {
      origin: origin,
      destination: destination,
      distance: distance,
      carbonFootprint: carbonFootprint,
      treesToOffset: new Array(treesNeeded).fill(0)
    }
    return newFlight
  }

  addFlight = async () => {
    try {
      let flightData = this.analyseFlight(this.state.origin, this.state.destination);
      let response = await fetch('http://192.168.1.187:3000/flights', {
        method: 'POST',
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify(flightData),
      });
      let flightsArray = [...this.state.flights];
      flightsArray.push(flightData);
      this.setState({flights: flightsArray});
    } catch (e) {
      console.log('error with addFlight:' + e)
    }
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

  componentDidMount () {
    this.getFlights()
  }

//formatting not quite right here - title bar should be outside of the inout view
  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <TitleBar />
        <TextInput
          style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
          placeholder="From"
          onChangeText={(origin) => this.setState({origin})}
        />
        <TextInput
          style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
          placeholder="To"
          onChangeText={(destination) => this.setState({destination})}
        />
        <Button title="Add Flight" color="#4A4A48" onPress={this.addFlight}>Add Flight</Button>
        <Forest flights={this.state.flights} />
      </View>
  }
}

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import TitleBar from '../components/titleBar.js';
import Forest from '../components/forest.js';

import Cities from '../data/cities.json';
import DataFunctions from '../dataProcessing/functions.js'

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
    title: 'My Trees',
  };

  addFlight = async () => {
    try {
      let flightData = DataFunctions.analyseFlight(this.state.origin, this.state.destination);
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

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Forest from './forest.js';

export default class addFlightContainer extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       origin: '',
       destination: '',
       flights: []
     };
   }


  addFlight = () => {
    const origin = this.state.origin;
    const destination = this.state.destination;

    if (origin && destination) {
      console.log(origin, destination)
      //calculate everything here
    }

    const newFlight = {
      origin: this.state.origin,
      destination: this.state.destination,
      distance: 0,
      carbonFootprint: 0,
      treesToOffset: [0,0,0]
    }

    let flightsArray = [...this.state.flights];
    flightsArray.push(newFlight);
    this.setState({flights: flightsArray});
  }

  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <Text>Add a Flight Container</Text>
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

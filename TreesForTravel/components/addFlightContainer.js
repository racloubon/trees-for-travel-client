import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Forest from './forest.js';

import Cities from '../data/cities.json'

export default class addFlightContainer extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       origin: '',
       destination: '',
       flights: []
     };
   }

   //original below at: https://www.movable-type.co.uk/scripts/latlong.html
   //found at: https://stackoverflow.com/questions/5260423/torad-javascript-function-throwing-error
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

   //refs: https://www.carbonindependent.org/sources_aviation.html

  addFlight = () => {
    const origin = this.state.origin;
    const destination = this.state.destination;

    // console.log(Cities.find(data => data.city === origin).lat)
    // console.log(Cities.find(data => data.city === origin).lng)
    // console.log(Cities.find(data => data.city === destination).lat)
    // console.log(Cities.find(data => data.city === destination).lng)


    //currently has default co-ordinates for London to New York - need to implement database to look-up
    const orLat = Cities.find(data => data.city === origin).lat;
    const orLon = Cities.find(data => data.city === origin).lng;
    const desLat = Cities.find(data => data.city === destination).lat;
    const desLong = Cities.find(data => data.city === destination).lng;
    const distance = Math.trunc(this.calculateDistanceInKm(orLat, orLon, desLat, desLong))
    const carbonFootprint = distance*115 //in grams
    const treesNeeded = carbonFootprint/900000 //in grams, assuming one tree absorbs 1 ton in its lifetime
    const treesNeededRounded = Math.round(treesNeeded)*10 //currently one tree = 1/10th of a tree because otherwise they're too small

    if (origin && destination) {
      console.log(origin, destination, distance, treesNeeded)

      const newFlight = {
        origin: origin,
        destination: destination,
        distance: distance,
        carbonFootprint: carbonFootprint,
        treesToOffset: new Array(treesNeededRounded).fill(0)
      }

      console.log(newFlight)

      let flightsArray = [...this.state.flights];
      flightsArray.push(newFlight);
      this.setState({flights: flightsArray});
    }
  }

  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
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

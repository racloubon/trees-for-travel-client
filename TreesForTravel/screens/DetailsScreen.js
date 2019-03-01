import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { connect } from 'react-redux';
import { getFlights, deleteFlight } from '../Redux/actions.js';

class DetailsScreen extends React.Component {

  constructor(props) {
     super(props);
     // this.state = {
     //   //flights: []
     // };
   }

   // getFlights = async () => {
   //   try {
   //     const flightsData = await fetch('http://192.168.1.187:3000/flights');
   //     const flights = await flightsData.json()
   //     this.setState({flights});
   //   } catch (e) {
   //     console.log('error with getting flights: ' + e)
   //   }
   // }

   deleteFlight = async (id) => {
     fetch('http://192.168.1.187:3000/flights/' + id, {method: 'DELETE'})
      .then(response => this.props.deleteFlight(id))
      .catch(e => console.log('error deleting flight: ' + e))
   }

  static navigationOptions = {
    title: 'My Flights',
  };

  // componentDidMount = () => {
  //   this.getFlights()
  // }

  render() {
    return (
      <ScrollView>
        {this.props.flights
          .map((flight, i) => {
            return (
              <View style={{backgroundColor: "#D8DAD3", margin: 10}} key={i}>
                <Text>From: {flight.origin}</Text>
                <Text>To: {flight.destination}</Text>
                <Text>Distance: {flight.distance}km</Text>
                <Text>Carbon Emissions: {Math.round(flight.carbonFootprint/100)}kg</Text>
                <Text>Trees Needed: {flight.treesToOffset.length}</Text>
                <Button title="Delete Flight" color="#4A4A48" onPress={() => this.deleteFlight(flight._id)}>Delete Flight</Button>
              </View>
            )
          })}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  flights: state.flights,
});

const mapDispatchToProps = (dispatch) => ({
  getFlights: (flights) => dispatch(getFlights(flights)),
  deleteFlight: (flight) => dispatch(deleteFlight(flight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

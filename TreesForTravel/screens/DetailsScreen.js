import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { connect } from 'react-redux';
import { getFlights, deleteFlight } from '../Redux/actions.js';

import DataFunctions from '../dataProcessing/functions.js'

class DetailsScreen extends React.Component {

  constructor(props) {
     super(props);
   }

   deleteFlight = async (id) => {
     fetch('http://192.168.1.187:3000/flights/' + id, {method: 'DELETE'})
      .then(response => this.props.deleteFlight(id))
      .catch(e => console.log('error deleting flight: ' + e))
   }

  static navigationOptions = {
    title: 'My Flights',
  };

  render() {
    if (this.props.flights) return (
      <ScrollView>
      <Image
        source={require('../assets/sky.jpg')}
        style={{position: 'absolute'}} />
        {this.props.flights
          .map((flight, i) => {
            return (
              <View style={{backgroundColor: "white", margin: 10, padding: 7, opacity: 0.7}} key={i}>
                <Text style={styles.header}>{flight.origin} → {flight.destination}</Text>
                <Text style={styles.body}>Distance: {DataFunctions.formatNumbers(flight.distance)}km</Text>
                <Text style={styles.body}>Carbon Emissions: {DataFunctions.formatNumbers(Math.round(flight.carbonFootprint/1000))}g</Text>
                <Text style={styles.body}>Trees Needed: {flight.treesToOffset.length/10}</Text>
                <Text style={styles.button} color="#4A4A48" onPress={() => this.deleteFlight(flight._id)}>✖</Text>
              </View>
            )
          })}
      </ScrollView>
    )
    return <Text style={styles.body}>Add a flight to begin</Text>
  }
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 15
  },
  body: {
    fontSize: 15
  },
  button: {
    fontSize: 17,
    textAlign: 'right'
  }
});

const mapStateToProps = (state) => ({
  flights: state.flights,
});

const mapDispatchToProps = (dispatch) => ({
  getFlights: (flights) => dispatch(getFlights(flights)),
  deleteFlight: (flight) => dispatch(deleteFlight(flight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

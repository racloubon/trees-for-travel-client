import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { getFlights, postFlight } from '../Redux/actions.js';

import TitleBar from '../components/titleBar.js';
import CitySearch from '../components/citySearch.js';
import Forest from '../components/forest.js';
import SummaryBar from '../components/summaryBar.js';


import Cities from '../data/cities.json';
import DataFunctions from '../dataProcessing/functions.js'

class HomeScreen extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       inputClear: false
     }
   }

  static navigationOptions = {
    title: 'My Trees',
  };

  addFlight = () => {
    this.setState({inputClear: true})
    let flightData = DataFunctions.analyseFlight(this.props.selectedOrigin, this.props.selectedDestination);
    fetch('http://192.168.1.187:3000/flights', {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(flightData),
      })
      .then(response => response.json())
      .then(flight => this.props.postFlight(flight))
      .catch(error => console.log('error with posting Flight: ' + error))
  }

  loadFlights = async () => {
    fetch("http://192.168.1.187:3000/flights")
      .then(response => response.json())
      .then(flights => this.props.getFlights(flights))
      .catch(error => console.log('error with getting Flights: ' + error))
  };

  componentDidMount = () => {
    this.loadFlights()
  };

  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <TitleBar />
        <CitySearch name="From" clear={this.state.inputClear} />
        <CitySearch name="To" clear={this.state.inputClear} />
        <Button title="Add Flight" color="#4A4A48" onPress={this.addFlight}>Add Flight</Button>
        <Forest flights={this.props.flights} />
        <SummaryBar flights={this.props.flights}/>
      </View>
  }
}

const mapStateToProps = (state) => ({
  flights: state.flights,
  selectedOrigin: state.selectedOrigin,
  selectedDestination: state.selectedDestination
});

const mapDispatchToProps = (dispatch) => ({
  getFlights: (flights) => dispatch(getFlights(flights)),
  postFlight: (flight) => dispatch(postFlight(flight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

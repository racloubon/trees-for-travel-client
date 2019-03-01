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
       origin: '',
       destination: '',
       testState: ''
     };
   }

  static navigationOptions = {
    title: 'My Trees',
  };

  addFlight = async () => {
    let flightData
      = DataFunctions.analyseFlight(this.state.origin, this.state.destination);
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

  changeHandler = (city, originOrDestination) => {
    this.setState({originOrDestination: DataFunctions.processCityInput(origin)})
  };

  componentDidMount = () => {
    this.loadFlights()
  };

//formatting not quite right here - title bar should be outside of the inout view
  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <TitleBar />
        <CitySearch />
        <TextInput
          style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
          placeholder="From"
          onChangeText={(origin) => this.setState({origin: DataFunctions.processCityInput(origin)})}
        />
        <TextInput
          style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
          placeholder="To"
          onChangeText={(destination) => this.setState({destination: DataFunctions.processCityInput(destination)})}
        />
        <Button title="Add Flight" color="#4A4A48" onPress={this.addFlight}>Add Flight</Button>
        <Forest flights={this.props.flights} />
        <SummaryBar flights={this.props.flights}/>
      </View>
  }
}

const mapStateToProps = (state) => ({
  flights: state.flights,
});

const mapDispatchToProps = (dispatch) => ({
  getFlights: (flights) => dispatch(getFlights(flights)),
  postFlight: (flight) => dispatch(postFlight(flight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

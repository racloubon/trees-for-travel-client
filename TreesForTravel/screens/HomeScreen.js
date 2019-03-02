import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import { connect } from 'react-redux';
import { getFlights, postFlight } from '../Redux/actions.js';

import TitleBar from '../components/titleBar.js';
import CitySearch from '../components/citySearch.js';
import Forest from '../components/forest.js';
import SummaryBar from '../components/summaryBar.js';

import forest from '../assets/forest.jpg'
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
      return (
        <View>
          <Image
            source={require('../assets/forest.jpg')}
            style={{position: 'absolute'}} />
          <TitleBar />
          <CitySearch name="From" clear={this.state.inputClear} />
          <CitySearch name="To" clear={this.state.inputClear} />
          <Text style={styles.button} title="Add Flight" onPress={this.addFlight}>➕</Text>
          <Forest flights={this.props.flights} />
          <SummaryBar flights={this.props.flights}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    opacity: 0.7,
    margin: 10,
    padding: 10,
    flex: 1
  },
  header: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    flex: 1
  },
  body: {
    fontSize: 26,
    backgroundColor: 'white',
    opacity: 0.7
  },
  button: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
    margin: 10
  },
});

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

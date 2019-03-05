import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { getFlights, postFlight } from '../Redux/actions.js';

import CitySearch from '../components/citySearch.js';
import Forest from '../components/forest.js';
import SummaryBar from '../components/summaryBar.js';

import splash1 from '../assets/splash1.jpg'
import Cities from '../data/cities.json';
import DataFunctions from '../dataProcessing/functions.js'

class HomeScreen extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       from: null,
       to: null,
       visible: false
     }
   }

  static navigationOptions = {
    title: 'My Trees',
  };

  addFlight = () => {
    this.setState({
      from: null,
      to: null
    });
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
    if (!this.state.visible) setTimeout(() => this.setState({visible: true}), 700)
  };

  render() {
    const {from, to} = this.state;
      return (
        <View style={{paddingTop: 30}}>
          <Image
            source={require('../assets/splash1.jpg')}
            style={{position: 'absolute', height: Dimensions.get('window').height, flex: 1 }} />
          <CitySearch name="From" city={from} onChange={city => this.setState({from: city})} />
          <CitySearch name="To" city={to} onChange={city => this.setState({to: city})} />
          <Text style={styles.button} onPress={this.addFlight}>Add</Text>
          <Forest flights={this.props.flights} />
          <SummaryBar flights={this.props.flights} isVisible={this.state.visible}/>
          {console.log(this.state.visible)}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D8DAD3',
    color: 'black',
    opacity: 0.7,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.8
  }
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

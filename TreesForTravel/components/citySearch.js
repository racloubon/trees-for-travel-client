import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { setSelectedOrigin, setSelectedDestination } from '../Redux/actions.js';

import Cities from '../data/cities.json';
import DataFunctions from '../dataProcessing/functions.js'

class citySearch extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       matchingCities: [],
       selectedCity: '',
       noCitySelected: true,
     }
   }

  searchForCity = (input) => {
    if (input.length > 1) {
      return Cities.filter(data => data.city.includes(input))
    }
    return [];
  }

  handlePress = (city, inputName) => {
    this.setState({selectedCity: city.city + ', ' + city.country});
    this.setState({noCitySelected: false})
    inputName === "From" ? this.props.setSelectedOrigin(city) : this.props.setSelectedDestination(city);
  }

  handleChange = (text) => {
    let formattedInput = DataFunctions.processCityInput(text);
    this.setState({noCitySelected: true});
    this.setState({selectedCity: null});
    this.setState({matchingCities: this.searchForCity(formattedInput)});
  }

  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <TextInput
            style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
            placeholder={this.props.name}
            value={this.state.selectedCity ? this.state.selectedCity : null}
            onChangeText={(text) => this.handleChange(text)}
          />
        {this.state.matchingCities.length && this.state.noCitySelected
          ? this.state.matchingCities
            .map((data, i) => <View key={i}><Text key={i * i} onPress={() => this.handlePress(data, this.props.name)}>{data.city + ', ' + data.country}</Text></View>)
          : null
        }
      </View>
  }
}

const mapStateToProps = (state) => ({
  selectedOrigin: state.selectedOrigin,
  selectedDestination: state.selectedDestination,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedOrigin: city => dispatch(setSelectedOrigin(city)),
  setSelectedDestination: city => dispatch(setSelectedDestination(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(citySearch);

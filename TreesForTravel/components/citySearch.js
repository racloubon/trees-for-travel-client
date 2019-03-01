import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Cities from '../data/cities.json';
import DataFunctions from '../dataProcessing/functions.js'

export default class citySearch extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       matchingCities: [],
       selectedCity: '',
       selectedFlag: true,
     }
   }

  searchForCity = (input) => {
    if (input.length > 3) {
      let arr = Cities.filter(data => data.city.includes(input))
      return arr.map(data => data.city + ', ' + data.country)
    }
    return [];
  }

  handlePress = (city) => {
    this.setState({selectedCity: city});
    this.setState({selectedFlag: false})
  }

  handleChange = (e) => {
    let formattedInput = DataFunctions.processCityInput(e)
    this.setState({selectedFlag: true})
    this.setState({selectedCity: null})
    this.setState({matchingCities: this.searchForCity(formattedInput)})
  }

  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <TextInput
            style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
            placeholder={this.props.placeholder}
            value={this.state.selectedCity ? this.state.selectedCity : null}
            onChangeText={(e) => this.handleChange(e)}
          />

        {this.state.matchingCities.length && this.state.selectedFlag
          ? this.state.matchingCities
            .map((city, i) => <View key={i}><Text key={i * i} onPress={() => this.handlePress(city)}>{city}</Text></View>)
          : <Text>Type 3 or more characters to search / No match</Text>
        }
      </View>
  }
}

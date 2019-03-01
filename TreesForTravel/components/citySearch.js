import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Cities from '../data/cities.json';
import DataFunctions from '../dataProcessing/functions.js'

export default class citySearch extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       matchingCities: [],
       selectedCity: ''
     }
   }

  handleInput = () => {

  }

  searchForCity = (input) => {
    console.log(input);
    if (input.length > 3) {
      let arr = Cities.filter(data => data.city.includes(input))
      return arr.map(data => data.city + ', ' + data.country)
    }
    return [];
  }

  render() {
      return <View style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <TextInput
          style={{height: 40, backgroundColor: "#F1F2EB", margin: 10}}
          placeholder='sample'
          onChangeText={e => this.setState({matchingCities: this.searchForCity(e)})}
        />


        {this.state.matchingCities.length
          ? this.state.matchingCities.map((city, i) => <View key={i}><Text key={i * i} onPress={() => this.setState({selectedCity: city})}>{city}</Text></View>)
          : <Text>Type 3 or more characters to search / No match</Text>
        }

        {console.log(this.state.selectedCity)}
      </View>
  }
}

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
    this.props.onChange(city.city + ', ' + city.country);
    this.setState({noCitySelected: false});
    inputName === "From" ? this.props.setSelectedOrigin(city) : this.props.setSelectedDestination(city);
  }

  handleChange = (text) => {
    let formattedInput = DataFunctions.processCityInput(text);
    this.setState({noCitySelected: true});
    this.props.onChange(null);
    this.setState({matchingCities: this.searchForCity(formattedInput)});
  }

  render() {
      return <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            placeholder={this.props.name}
            placeholderTextColor="white"
            value={this.props.city}
            onChangeText={this.handleChange}
          />
        {this.state.matchingCities.length && this.state.noCitySelected
          ? this.state.matchingCities
            .map((data, i) => <Text style={styles.searchOptions} key={i * i} onPress={() => this.handlePress(data, this.props.name)}>{data.city + ', ' + data.country}</Text>)
          : null
        }
      </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.7,
    marginHorizontal: 10,
    marginVertical: 3,
    padding: 10,
  },
  body: {
    fontSize: 26,
    backgroundColor: 'black',
    color: 'white'
  },
  textInput: {
    fontSize: 26,
    backgroundColor: 'black',
    color: 'white'
  },
  searchOptions: {
    fontSize: 20,
    color: 'white',
    padding: 10
  }
});

const mapStateToProps = (state) => ({
  selectedOrigin: state.selectedOrigin,
  selectedDestination: state.selectedDestination,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedOrigin: city => dispatch(setSelectedOrigin(city)),
  setSelectedDestination: city => dispatch(setSelectedDestination(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(citySearch);

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
    if (input.length > 3) {
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
    this.setState({matchingCities: this.searchForCity(formattedInput)});
  }

  render() {
      return <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            placeholder={this.props.name}
            placeholderTextColor='#F1F2EB'
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
    marginHorizontal: 15,
    marginVertical: 3,
    padding: 2,
    borderColor: '#F1F2EB',
    borderWidth: 1
  },
  textInput: {
    fontSize: 20,
    // backgroundColor: '#F1F2EB',
    // opacity: 0.8,
    color: '#F1F2EB',
    fontWeight: 'bold',
    letterSpacing: 0.8,
    padding: 5
  },
  searchOptions: {
    fontSize: 20,
    color: '#4A4A48',
    backgroundColor: '#F1F2EB',
    opacity: 0.7,
    padding: 10,
    fontWeight: 'bold',
    letterSpacing: 0.9,
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

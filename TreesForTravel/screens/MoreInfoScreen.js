import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import CitySearch from '../components/citySearch.js';

export default class MoreInfoScreen extends React.Component {

  constructor(props) {
     super(props);
   }

  static navigationOptions = {
    title: 'More Info',
  };

  render() {
    return (
      <ScrollView style={{flex: 6, backgroundColor: '#D8DAD3'}}>
        <CitySearch />
      </ScrollView>
    );
  }
}

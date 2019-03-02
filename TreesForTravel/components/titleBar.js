import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const titleBar = (props) => {
  return <View style={{backgroundColor: 'black', opacity: 0.7, margin: 10}}>
    <Text style={{fontSize: 40, color: 'white', textAlign: 'center'}}>Trees for Travel</Text>
  </View>
}


export default titleBar;

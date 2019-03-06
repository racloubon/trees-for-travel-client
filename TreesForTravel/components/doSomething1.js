import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import DataFunctions from '../dataProcessing/functions.js'

export default doSomething1 = ({ cost }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mask}></View>
      <Text style={styles.header}>What can you do?</Text>
      <Text style={styles.subheader}>Based on distance flown, the estimated cost to offset your carbon emissions is</Text>
      <Text style={styles.header}>£{cost}</Text>
      <Text style={styles.subheader}>How can you donate?  </Text>
      <Text style={styles.arrow}> → </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mask: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute'
  },
  container: {
    width: Dimensions.get('window').width,
    paddingVertical: 100,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#F1F2EB',
    letterSpacing: 0.8,
    marginHorizontal: 20,
    marginVertical: 35,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#D8DAD3',
    marginTop: 10,
    letterSpacing: 0.8,
    marginHorizontal: 25
  },
  arrow: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: '#D8DAD3',
    marginTop: 10,
    letterSpacing: 0.8,
  }
});

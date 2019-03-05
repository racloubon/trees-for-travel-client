import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const splash1 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mask}></View>
      <Text style={styles.header}>Pick an organisation and donate $XX.XX now:</Text>
      <Text style={styles.header}>Organisation 1</Text>
      <Text style={styles.header}>Organisation 2</Text>
      <Text style={styles.header}>Organisation 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mask: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#566246',
    opacity: 0.5,
    position: 'absolute'
  },
  container: {
    width: Dimensions.get('window').width,
    paddingVertical: 30,
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
  }
});


export default splash1;

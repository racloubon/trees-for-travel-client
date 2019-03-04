import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const splash1 = (props) => {
  return (
    <View style={{width: Dimensions.get('window').width}}>
    <Image
      source={require('../assets/splash1.jpg')}
      style={{position: 'absolute', width: Dimensions.get('window').width }} />
      <Text style={styles.header}>Trees for Travel</Text>
      <Text style={styles.subheader}>Calculate the carbon footprint of your flights</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: '#F1F2EB',
    letterSpacing: 0.8,
    marginHorizontal: 80,
    marginTop: 35,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#D8DAD3',
    marginTop: 10,
    letterSpacing: 0.8,
    marginHorizontal: 50
  }
});


export default splash1;

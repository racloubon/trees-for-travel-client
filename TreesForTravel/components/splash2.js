import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const splash2 = (props) => {
  return (
    <View style={{width: Dimensions.get('window').width}}>
    

    <View style={{backgroundColor: 'black', opacity: 0.8, marginTop: 400, paddingVertical: 20}}>
      <Text style={styles.header}>Trees for Travel</Text>
      <Text style={styles.subheader}>Calculate the carbon footprint of your flights</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 0.8,
    marginHorizontal: 80,
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


export default splash2;

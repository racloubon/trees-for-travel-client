import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default organisation = ( { data } ) => {
  return (
    <View>
      <Text style={styles.subheader}>{data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subheader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#D8DAD3',
    marginTop: 50,
    letterSpacing: 0.8,
    marginHorizontal: 25
  },
});

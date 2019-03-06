import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Linking } from 'react-native';

import OrganisationData from '../data/organisations.json';
import Organisation from './organisation.js';


export default doSomething2 = ({ cost }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mask}></View>
      <Text style={styles.header}>Pick an organisation and donate £{cost}</Text>
      <Text style={styles.header} onPress={() => Linking.openURL('https://portal.worldlandtrust.org/portal/public/donate/donate.aspx?donationAmount=&productID=PLANT%20A%20TREE')}>World Land Trust</Text>
      <Text style={styles.header} onPress={() => Linking.openURL('https://onetreeplanted.org/collections/where-we-plant')}>One Tree Planted</Text>
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

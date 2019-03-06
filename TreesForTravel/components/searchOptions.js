import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default searchOptions = ({ matchingCities, noCitySelected, handlePress, name }) => {
  if (matchingCities.length && noCitySelected) {
    return matchingCities.map((data, i) => <Text
      style={styles.searchOptions}
      key={i * i}
      onPress={() => handlePress(data, name)}>
      {data.city + ', ' + data.country}
    </Text>)
  }
  return null;
}

const styles = StyleSheet.create({
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

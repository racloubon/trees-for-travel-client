import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const tree = (props) => {
  const randomNumber = Math.floor(Math.random()*3);
  return <Text style={{fontSize: 35}}> { randomNumber === 0 ? '🌲' : randomNumber === 1 ? '🌳' : '🌴' } </Text>
}


export default tree;

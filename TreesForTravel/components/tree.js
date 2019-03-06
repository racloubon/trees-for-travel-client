import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import posed from 'react-native-pose';

const Tree = posed.View({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const calculateFontSize = (treeCount) => {
  if (treeCount <= 80) return 80; //80
  if (treeCount <= 120) return 53;
  if (treeCount <= 320) return 38;
  if (treeCount <= 500 ) return 31;
  if (treeCount <= 720 ) return 26;
  if (treeCount <= 1120 ) return 18;
  if (treeCount <= 1760 ) return 15;
  return 10;
}

export default ({ isVisible, treeCount, num }) => {
  return (<Tree pose={isVisible ? 'visible' : 'hidden'}><Text style={{fontSize: calculateFontSize(treeCount)}}>{num === 1 || num % 10 === 0 ? '🌲' : null }</Text></Tree>)
}

const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
  },
  emoji: {
    fontSize: 30
  }
});

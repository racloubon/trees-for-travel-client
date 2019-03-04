import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import posed from 'react-native-pose';

const Tree = posed.View({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const calculateFontSize = (treeCount) => {
  if (treeCount <= 32) return 38;
  if (treeCount <= 50 ) return 31;
  if (treeCount <= 72 ) return 26;
  if (treeCount <= 112 ) return 18;
  if (treeCount <= 176 ) return 15;
  return 10;
}

export default ({ isVisible, treeCount }) => {
  const randomNumber = Math.floor(Math.random()*3);
  return (<Tree pose={isVisible ? 'visible' : 'hidden'}><Text style={{fontSize: calculateFontSize(treeCount)}}>{ randomNumber === 0 ? '🌲' : randomNumber === 1 ? '🌳' : '🌴' }</Text></Tree>)
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

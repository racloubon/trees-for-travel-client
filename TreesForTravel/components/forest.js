import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Tree from './tree.js';

export default class forest extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       visible: false,
     }
   }

   animateTree = () => {
     if (!this.state.visible) setTimeout(() => this.setState({visible: true}), 600)
   }

   componentDidMount () {
     this.animateTree()
   }

  render () {
    return (
      <View style={styles.container}>
        {
          this.props.flights.map((flight, i) => flight.treesToOffset.map((flight, j) => <Tree isVisible={this.state.visible} key={i + j} treeCount={this.props.flights.reduce((acc, flight) => acc + flight.treesToOffset.length, 0)} />))
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F2EB',
    opacity: 0.6,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: 200,
    borderColor: '#4A4A48',
    borderWidth: 1
  },
});

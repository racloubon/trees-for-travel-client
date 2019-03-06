import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { connect } from 'react-redux';

import DoSomething1 from '../components/doSomething1.js';
import DoSomething2 from '../components/doSomething2.js';


class MoreInfoScreen extends React.Component {

  constructor(props) {
     super(props);
   }

  static navigationOptions = {
    title: 'More Info',
  };

  render() {
    const cost = ((this.props.flights.reduce((acc, flight) => acc + flight.carbonFootprint, 0)/1000*0.75)/100).toFixed(2)
    return (
      <View style={{flex: 1}}>
      <Image
        source={require('../assets/background.jpg')}
        style={{position: 'absolute', height: Dimensions.get('window').height, flex: 1 }} />

      <ScrollView horizontal={true} decelerationRate={0} snapToInterval={Dimensions.get('window').width} snapToAlignment={"center"} style={styles.splash}>

        <DoSomething1 cost={cost} />
        <DoSomething2 cost={cost} />

      </ScrollView>
      </View>
    );
  }
  }




const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    opacity: 0.7,
    margin: 10,
    padding: 10,
    flex: 1
  },
  header: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  body: {
    fontSize: 18
  }
});

const mapStateToProps = (state) => ({
  flights: state.flights
});

export default connect(mapStateToProps)(MoreInfoScreen);

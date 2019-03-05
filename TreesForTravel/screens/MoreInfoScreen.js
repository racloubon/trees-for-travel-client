import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { connect } from 'react-redux';

import Splash1 from '../components/splash1.js';
import Splash2 from '../components/splash2.js';


class MoreInfoScreen extends React.Component {

  constructor(props) {
     super(props);
   }

  static navigationOptions = {
    title: 'More Info',
  };

  render() {

    return (
      <View style={{flex: 1}}>
      <Image
        source={require('../assets/splash1.jpg')}
        style={{position: 'absolute', height: Dimensions.get('window').height, flex: 1 }} />

      <ScrollView horizontal={true} decelerationRate={0} snapToInterval={Dimensions.get('window').width} snapToAlignment={"center"} style={styles.splash}>

        <Splash1 flights={this.props.flights}/>
        <Splash2 />

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

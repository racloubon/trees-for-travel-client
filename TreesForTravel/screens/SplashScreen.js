import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SplashScreen extends React.Component {

  constructor(props) {
     super(props);
   }

  render() {

    return (
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/background.jpg')}
          style={{position: 'absolute', width: Dimensions.get('window').width, flex: 1 }} />
        <Text style={styles.header}>Trees for Travel</Text>
        <Text style={styles.subheader}>Calculate the carbon footprint of your flights</Text>
        <View style={styles.button}><Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('HomeStack')}>GET STARTED</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  },
  header: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    color: '#F1F2EB',
    letterSpacing: 0.8,
    marginHorizontal: 80,
    marginTop: 50,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#D8DAD3',
    marginTop: 10,
    letterSpacing: 0.8,
    marginHorizontal: 50
  },
  button: {
    backgroundColor: '#D8DAD3',
    alignSelf: 'center',
    marginTop: 300,
    padding: 5
  },
  buttonText: {
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
    letterSpacing: 0.8
  }
});

// render() {

//   return (
//     <View style={{flex: 1}}>
//     <Image
//       source={require('../assets/splash.jpg')}
//       style={{position: 'absolute', height: Dimensions.get('window').height, flex: 1 }} />
//
//     <ScrollView horizontal={true} decelerationRate={0} snapToInterval={Dimensions.get('window').width} snapToAlignment={"center"} style={styles.splash}>
//
//       <Splash1 />
//       <Splash2 />
//
//     </ScrollView>
//     </View>
//   );
// }
// }

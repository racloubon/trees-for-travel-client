import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import forest from '../assets/forest.jpg'


export default class MoreInfoScreen extends React.Component {

  constructor(props) {
     super(props);
   }

  static navigationOptions = {
    title: 'More Info',
  };

  render() {
    return (
      <ScrollView>
        <Image
          source={require('../assets/forest.jpg')}
          style={{position: 'absolute'}} />

        <View style={styles.container}>
          <Text style={styles.header}>Deforestation</Text>

          <Text style={styles.body}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum libero, quis aliquet justo rutrum ac. Donec bibendum sapien erat, sed consectetur ex euismod sed. Nunc blandit congue enim. Pellentesque dapibus non neque sit amet viverra. Sed nec augue pulvinar, pharetra felis in, semper augue. Donec non dolor nisl. Integer eget posuere turpis, eget consectetur mi. Curabitur dignissim condimentum leo nec mollis. Curabitur consectetur, urna et congue egestas, augue elit eleifend nisl, nec dignissim augue eros a nibh. Suspendisse consequat nisi eu nisi pharetra, a iaculis ipsum sollicitudin. In pharetra diam id mi semper tincidunt. Duis enim elit, consequat vulputate gravida eu, rhoncus ac tortor. Donec rhoncus maximus nibh a ornare. Integer tincidunt convallis nunc, tempus lobortis eros porttitor finibus. Donec vel venenatis leo, a posuere risus.

          Duis ut lobortis ante. Donec consequat justo sed augue pellentesque maximus. Vivamus interdum diam eget diam volutpat fermentum. Mauris egestas finibus metus, quis ultricies massa elementum quis. Nullam bibendum luctus sem quis semper. Donec convallis lorem tellus, at volutpat odio suscipit a. Pellentesque pulvinar mollis massa, quis malesuada justo aliquet sit amet. Morbi vitae nibh egestas, imperdiet eros nec, scelerisque metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim metus, a fermentum ipsum placerat at.

          Maecenas cursus quis dui at cursus. Suspendisse quis nibh ultrices risus blandit condimentum. Integer et mollis orci. Nam ultrices sem quam, ut tristique dui cursus nec. Sed ultricies quam metus, a pretium magna blandit at. Aenean sed ex ac orci bibendum tempus non non tellus. Nam convallis id ipsum id molestie. Quisque fermentum auctor magna nec cursus. Mauris lacinia augue eget enim pulvinar, eu rhoncus ipsum consequat. Ut vitae sagittis ante. Phasellus aliquam nibh felis, ut posuere elit vestibulum eget. Nam eget luctus arcu, id viverra velit.

          </Text>
        </View>

      </ScrollView>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const summaryBar = (props) => {
  return <View>
            <Text>You have taken {props.flights.length} flights since DATE, across XXXkm and producing a total of Xkg carbon emissions</Text>
            <Text>Trees Needed to Offset: </Text>
        </View>
}


export default summaryBar;

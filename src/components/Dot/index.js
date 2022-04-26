import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dot(props) {
 return (
  <View style={[styles.container, {backgroundColor: props.color}]}>
       
  </View>
  );
}

const styles = StyleSheet.create({

  container:{
    width: 28,
    height: 28,
    borderRadius: 30,
    marginHorizontal: 12,
    elevation: 5
  }

})
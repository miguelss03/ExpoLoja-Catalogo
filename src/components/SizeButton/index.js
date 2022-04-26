import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SizeButton(props) {
 return (
   <View style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }  ]}>
       <Text style={[styles.text, { color: props.color || '#696969' }]}>
           {props.children}
       </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#E6E6E6',
        borderWidth: 2,
        marginHorizontal: 6,

    },

    text: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }

});
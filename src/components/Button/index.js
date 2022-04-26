import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.bntContainer}>
           <Text style={styles.label}>COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },

    bntContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#17181A',
        borderRadius: 8,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    label:{
        fontSize: 17,
        color: '#FFF'
    }

});  
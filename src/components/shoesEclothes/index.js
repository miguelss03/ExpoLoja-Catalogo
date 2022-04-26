import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function shoesEclothes(props) {

    function filterDesc(descri){
        if(descri.length < 25){
            return descri;
        }

        return `${descri.substring(0,20)}...`;
    }

 return (
   <TouchableOpacity style={styles.container}
        onPress={props.onClick}
    >
       <Image 
        source={props.img}
        style={styles.img}
       />

       <Text style={styles.bagsTxt}>
           {filterDesc(props.children)} 
       </Text>

       <View opacity={0.65}>
        <Text style={styles.bagsTxt}>
            {props.cost}
        </Text>
       </View>
      
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    
    container:{
        paddingVertical: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },


    img: {
        width: 130,
        height: 175
    },

    bagsTxt: {
        fontSize: 13.5,
        fontWeight: '700',
        fontFamily: 'Oswald_400Regular'
    }

});
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot/index';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Detail({ navigation }) {
  
  navigation.setOptions({
    headerTitle: 'Camisa Florida'
  });

 return (
   <ScrollView style={styles.container}>
       <Image
        source={require('../../assests/blusaMasculina.modelo2.jpg')}
        style={styles.img}
        resizeMode="cover"
       />

      <View>
        <View>
            <Text style={[styles.title, {fontSize: 22}]}>R$ 69,99</Text>
        </View>

        <View opacity={0.75}>
            <Text style={[styles.title, {fontSize: 28}]}>Camisa Florida</Text>
        </View>

        <View style={styles.dotContainer}>
            <Dot color="#000" />
            <Dot color="#DDD" />
            <Dot color="#FFF457" />
            <Dot color="#24BA" />
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}>
                <SizeButton>GG</SizeButton>
                <SizeButton bgColor="#171717" color="#FFF">G</SizeButton>
                <SizeButton>M</SizeButton>
                <SizeButton>P</SizeButton>
          </ScrollView>
        </View>
        
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
           Camisa Florida
          </Text>
          <Text style={styles.textContent}>
          Camisas masculinas produzidas em malha 100% viscose.
          Modelos de excelente qualidade. Apresentam costura reforçada e ótimo acabamento.
          Modelagem moderna e que veste super bem. Peças originais e exclusivas da marca Bamborra Denim.

          As camisas masculinas estampadas florais e listradas estão em alta e são tendência no mundo da 
          moda masculina. Elas são estilosas e despojadas ao mesmo tempo e caem bem em diversas ocasiões.
          O tecido viscose é leve e muito confortável, ideal para dias ensolarados e lugares quentes.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Detalhes
          </Text>
        </View>

        <Button/>

        <View style={styles.line}/>

        <Footer/>

      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'

  },

  img: {
    width: 345,
    height: 410

  },

  title: {
    fontFamily: 'Oswald_400Regular',
    paddingHorizontal: 12
  },
  
  dotContainer:{
    flexDirection: 'row',
    marginVertical: 12
  },

  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },

  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },

  textList: {
    fontSize: 16,
    lineHeight: 25
  },

  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }

})
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import Bags from '../../components/shoesEclothes/index';

export default function Home() {
  const navigation = useNavigation();

 return (
   <View style={styles.container}>
     <View style={styles.header}>
     <Image
      source={require('../../assests/banner.jpg')}
      style={styles.imgage}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>ROUPAS</Text>
        <Text style={[styles.text, {color: '#4F4F4F'}]}>|</Text>
        <Text style={[styles.text, {color: '#4F4F4F'}]}>Masc/Femi</Text>

        <TouchableOpacity style={{
          position: 'absolute',
          right: 0,
          alignSelf: 'center'
        }}>
          <MaterialIcons
            name="filter-list"
            size={24}
            color="#000"
          />
        </TouchableOpacity>      
      </View>
     </View>

     <View style={styles.line}/>

     <ScrollView style={styles.scroll}>
       <Text style={styles.textTitle}>LANÇAMENTOS</Text>

       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Bags img={require('../../assests/blusaMasculina.modelo2.jpg')} cost="R$69,99" onClick={()=> navigation.navigate('Detail')}>
            Camiseta Flodida
          </Bags>
          <Bags img={require('../../assests/blusasFemininas.modelo.jpg')} cost="R$79,99" onClick={()=> alert('DEU BOM POURA')} >
            Blusa
          </Bags>         
       </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>          
          <Bags img={require('../../assests/bermudas.jpg')} cost="R$59,99" onClick={()=> alert('DEU BOM POURA')} >
            Bermudas
          </Bags>

          <Bags img={require('../../assests/calçasMasculinas.jpg')} cost="R$59,99" onClick={()=> alert('DEU BOM POURA')} >
            Calças Slim
          </Bags>
        </View>


    
       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         
          <Bags img={require('../../assests/blusas.femininas.jpg')} cost="R$79,99" onClick={()=> alert('DEU BOM POURA')} >
            Blusas Femininas
          </Bags>
          <Bags img={require('../../assests/blusaMasculina.modelo.jpg')} cost="R$79,99" onClick={()=> alert('DEU BOM POURA')} >
            Camiseta Gay
          </Bags>

       </View>     

       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Bags img={require('../../assests/blusasFemininas.modelo.jpg')} cost="R$69,99" onClick={()=> alert('DEU BOM POURA')} >
            Camiseta
          </Bags>
          <Bags img={require('../../assests/blusasFemininas.modelo2.jpg')} cost="R$79,99" onClick={()=> alert('DEU BOM POURA')} >
            Camiseta Florida
          </Bags>
       </View>     

       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Bags img={require('../../assests/blusasFemininas.modelo3.jpg')} cost="R$69,99" onClick={()=> alert('DEU BOM POURA')} >
            Camiseta Flodida
          </Bags>

          <Bags img={require('../../assests/blusaMasculina.modelo3.jpg')} cost="R$59,99" onClick={()=> alert('DEU BOM POURA')} >
            Camiseta semi-gay
          </Bags>          
       </View>     
    </ScrollView>


   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },

  header:{
    marginBottom: 0,
  },

  imgage:{
    width: 360,
    height: 150,
  },

  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },

  text:{
    fontFamily: 'Oswald_400Regular',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: '1%'
  },

  textTitle: {
    fontFamily: 'Oswald_400Regular',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: '1%'
  },


  line: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 2,
    
  },

  scroll: {
     
    height: '200%',
    width: '100%',
    marginHorizontal: '1%'
}

});
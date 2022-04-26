import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {AppLoading } from 'expo'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';

import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading />;
  }

 
  return (
    <>
      <StatusBar style="dark"  translucent={true} />
      <Routes/>
    </>
  );
}


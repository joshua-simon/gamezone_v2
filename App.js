import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import Home from './screens/home'
import Navigator from './routes/homeStack'


export default function App() {
  let [fontsLoaded] = useFonts({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
      <Navigator/>
    )  
  }
}


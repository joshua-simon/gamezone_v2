import React from 'react';
import {  View, Text, Button } from 'react-native';
import { globalStyles } from './styles/globalStyles'

export default function Home(props) {

  const { navigation } = props

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  return (
    <View style={globalStyles.container}>
      <Text style = {globalStyles.title}>Home Screen</Text>
      <Button title = 'go to review deets' onPress = {pressHandler}/>
    </View>
  )
}


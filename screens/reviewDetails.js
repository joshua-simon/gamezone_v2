import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from './styles/globalStyles'

export default function ReviewDetails(props) {

  const { route } = props
  const { title,body,rating } = route.params

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  )
}


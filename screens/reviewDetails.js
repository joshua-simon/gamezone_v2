import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from './styles/globalStyles'
import Card from '../shared/card'

export default function ReviewDetails(props) {

  const { route } = props
  const { title,body,rating } = route.params

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </Card>
    </View>
  )
}


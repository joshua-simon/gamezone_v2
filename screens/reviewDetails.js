import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from './styles/globalStyles'
import { images } from './ratings'
import Card from '../shared/card'

export default function ReviewDetails(props) {

  const { route } = props
  const { title,body,rating } = route.params

  return (
    <View style={ globalStyles.container }>
      <Card>
        <Text>{ title }</Text>
        <Text>{ body }</Text>
        <View style = { styles.rating }>
          <Text> Gamezone rating:</Text>
          <Image source = { images.ratings[rating] }/>
        </View>
          <Image/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})


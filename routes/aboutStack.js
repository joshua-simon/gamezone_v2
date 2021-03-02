import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'
import Header from '../shared/header'

const Stack = createStackNavigator()

const AboutStack = (props) => {

    const { navigation } = props

    return(
            <Stack.Navigator>
                <Stack.Screen 
                name = 'AboutGameZone' 
                component = {About}
                options = {{headerTitle: () =>  <Header navigation = {navigation} title = 'About GameZone'/>}}
                />
            </Stack.Navigator>
    )
}

export default AboutStack
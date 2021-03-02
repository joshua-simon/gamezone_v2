import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'
import Header from '../shared/header'

const Stack = createStackNavigator()

const AboutStack = ({navigation}) => {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                name = 'AboutGameZone' 
                component = {About}
                options = {{headerTitle: () =>  <Header navigation = {navigation}/>}}
                />
            </Stack.Navigator>
    )
}

export default AboutStack
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const Stack = createStackNavigator()

const Navigator = (props) => {

    const { navigation } = props

    return(
            <Stack.Navigator>
                <Stack.Screen 
                name = 'GameZone' 
                component = {Home}
                options = {{headerTitle: () => <Header navigation = {navigation}/>}}
                />
                <Stack.Screen 
                name = 'ReviewDetails' 
                component = {ReviewDetails}
                options = {{title: 'Review details'}}
                />
            </Stack.Navigator>
    )
}

export default Navigator

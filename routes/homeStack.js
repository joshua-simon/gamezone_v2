import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'


const Stack = createStackNavigator()

const Navigator = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                name = 'GameZone' 
                component = {Home}
                options = {{headerTitle: () => <Header/>}}
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

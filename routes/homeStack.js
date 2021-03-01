import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createStackNavigator()

const Navigator = () => {
    return(
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name = 'GameZone' 
                component = {Home}
                options = {{title: 'Game Zone'}}
                />
                <Stack.Screen 
                name = 'ReviewDetails' 
                component = {ReviewDetails}
                options = {{title: 'Review details'}}
                />
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default Navigator

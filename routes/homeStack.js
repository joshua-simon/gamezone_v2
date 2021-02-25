//where stack navigator is configured
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'


// create stack navigator
const Stack = createStackNavigator()

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Home' component = {Home} initialRouteName = 'Home'/>
                <Stack.Screen name = 'ReviewDetails' component = {ReviewDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

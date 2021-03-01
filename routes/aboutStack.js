import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from '../screens/about'

const Stack = createStackNavigator()

const AboutStack = () => {
    return(
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name = 'AboutGameZone' 
                component = {About}
                options = {{title: 'About'}}
                />
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default AboutStack
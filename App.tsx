import {LoginScreen} from './src/screens/LoginScreen';
import {RegisterScreen} from './src/screens/RegisterScreen';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>

    <Stack.Screen name='Welcome' component={WelcomeScreen}/>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
</Stack.Navigator>
</NavigationContainer>
    
  );
}
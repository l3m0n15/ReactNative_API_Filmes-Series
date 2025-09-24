import React from 'react';
import {Button, View,} from 'react-native';
import{ButtonOne} from '../components/ButtonMain';
import { Colors } from '../styles/colors';

export const LoginScreen =() => {
return(

<View>

<ButtonOne title="Register" backgroundColor={Colors.spotifyGreen} textColor={Colors.white} onPress={() => console.log("Register button pressed")} />
<ButtonOne title="Login" backgroundColor="#191414" textColor="#FFFFFF" onPress={() => console.log("Login button pressed")} />




</View>

)

}

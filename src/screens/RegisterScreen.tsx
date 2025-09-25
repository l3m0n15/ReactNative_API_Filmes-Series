import React from 'react';
import {Button, View,} from 'react-native';
import{ButtonOne} from '../components/ButtonMain';
import { Colors } from '../styles/colors';

export const TelaDeRegistro =() => {
return(

<View>

<ButtonOne title="Continue com seu E-mail" backgroundColor={Colors.spotifyGreen} textColor={Colors.white} onPress={() => console.log("Register button pressed")} />
<ButtonOne title="Continue com seu numero de celular" backgroundColor="#191414" textColor="#FFFFFF" onPress={() => console.log("Login button pressed")} />
<ButtonOne title="Continue com seu Google" backgroundColor="#191414" textColor="#FFFFFF" onPress={() => console.log("Login button pressed")} />




</View>

)

}
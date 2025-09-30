import React from 'react';
import {Button, View,} from 'react-native';
import{ButtonOne} from '../components/ButtonMain';
import { Colors } from '../styles/colors';

export const TelaDeLogin =() => {
return(

<View>

<ButtonOne title="Continue com seu E-mail" backgroundcolor={Colors.spotifyGreen} textColor={Colors.white} onPress={() => console.log("Register button pressed")} />
<ButtonOne title="Continue com seu numero de celular" backgroundcolor="#191414" textColor="#FFFFFF" onPress={() => console.log("Login button pressed")} />
<ButtonOne title="Continue com seu Google" backgroundcolor="#191414" textColor="#FFFFFF" onPress={() => console.log("Login button pressed")} />
<ButtonOne title="Continue com seu Facebook" backgroundcolor="#191414" textColor="#FFFFFF" onPress={() => console.log("Login button pressed")} />




</View>

)

}
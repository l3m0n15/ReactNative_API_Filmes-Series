import React from 'react';
import {View,} from 'react-native';
import{ButtonOne} from '../components/ButtonMain';
import { Colors } from '../styles/colors';

export const LoginScreen =() => {
return(

<View>

<ButtonOne title="Register" backgroundColor={Colors.spotifyGreen} textColor={Colors.white} />
<ButtonOne title="Login" backgroundColor="#191414" textColor="#FFFFFF" />




</View>

)

}

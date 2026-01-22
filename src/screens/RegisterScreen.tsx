import { View,Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from '../styles/colors'
import { ButtonOne } from "../components/ButtonMain";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.spotifyBlack,
    },



    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 20,
    }
});

export const RegisterScreen = ({navigation}: { navigation:any}) => { 
    return(

<View style={styles.container}>
    <Text style={styles.title}>Crie sua conta</Text>

<View style={{gap:15}}>


<ButtonOne title="Entrar com instagram"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log("Instagram"); navigation.navigate("Register");}}/>
<ButtonOne title="Entrar com Google"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log("Google"); navigation.navigate("Register");}}/>
<ButtonOne title="Entrar com Facebook"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log("Facebook"); navigation.navigate("Register");}}/>
<ButtonOne title="Entrar com numero de telefone"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log("Telefone"); navigation.navigate("Register");}}/>

</View>
</View>
    );
    };
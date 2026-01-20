import React from "react";
import { View,Text, StyleSheet} from "react-native";
import { ButtonOne } from "../components/ButtonMain";
import { Colors } from "../styles/colors";

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
})

export const WelcomeScreen = ({navigation}) => {
    return(

<View>
<Text> Welcome </Text>  
<ButtonOne  title="Register"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log(""); navigation.navigate("Register");}}/>
<ButtonOne title="Login"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log(""); navigation.navigate("Login");}}/>


</View>

    )

};



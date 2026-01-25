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
});

export const WelcomeScreen = ({navigation}: any) => {
    return(

<View style={styles.container}>
<Text style={styles.title}> Welcome </Text>  
<View style={{gap:15}}>
<ButtonOne  title="Register"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log(""); navigation.navigate("Register");}}/>
<ButtonOne title="Login"backgroundColor={Colors.spotifyGreen}textColor={Colors.white}onPress={() => {console.log(""); navigation.navigate("Login");}}/>
</View>

</View>

    )

};



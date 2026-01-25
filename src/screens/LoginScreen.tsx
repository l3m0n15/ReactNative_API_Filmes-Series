import React, {useState} from 'react';
import {View, Text, StyleSheet, Touchable} from 'react-native';
import { Colors } from '../styles/colors';
import { InputField } from '../components/InputField';
import {ButtonOne} from '../components/ButtonMain';
import { ButtonSocialMedia } from '../components/ButtonSocialMedia';

 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.spotifyBlack,
        paddingHorizontal:20,
        paddingTop:40,
        justifyContent:'center',
    },
    header:{
        fontSize:32,
        fontWeight:'bold',
        color: Colors.white,
        marginBottom:30,
        textAlign:'center',
    },
 });

export const LoginScreen =({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log ('Login:', {email, senha});
            // depois: validar e chamar API

    };
return(

<View style={styles.container}>
    <Text style={styles.header}>Filmes e Séries</Text>

<InputField
placeholder='Email'
value={email}
onChangeText={setEmail}/>

<InputField
placeholder='Senha'
value={senha}
onChangeText={setSenha}
secureTextEntry={true}/>

<ButtonOne
title='Entrar'
backgroundColor={Colors.spotifyGreen}
textColor={Colors.white}
onPress={handleLogin}/>

<ButtonOne
title='Criar conta'
backgroundColor='transparent'
textColor={Colors.white}
onPress={()=> navigation.navigate('Register')}
/>


</View>

)

}
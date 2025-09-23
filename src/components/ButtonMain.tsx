import React from "react";
import {Touchableopacity, Text, StyleSheet} from 'react-native';

//Definindo os tipos das props do botão
interface ButtonVerdeProps {
title:string  //Texto que vai aparecer dentro do botão
onPress: () => void // Função que será executada quando o botão for pressionado

}

//Componente funcional do botão
export const ButtonVerdeProps: React.FC<ButtonVerdeProps> = ({title, onPress}) => {
    return(
//TouchableOpacity é o botão "clicável" que dá efeito de opacidade ao ser pressionado
<Touchableopacity
Style={Styles.button}  //Aplica os estilos definidos da pasta "Styles./ButtonMain.ts"
onPress={onPress}  //Liga a função de clique passada como prop
activeOpacity={0.7}  //Define a transparência quando o botão é pressionado
>

{/* Texto dentro do botão*/ }
<text style={Style.text}> Login </text>


</Touchableopacity>
    )
}
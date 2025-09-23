import React from "react";
import {TouchableOpacity,Text} from 'react-native';
import { Styles } from "../styles/ButtonMain"; //importar estilos de outro arquivo

//Definindo os tipos das props do botão
interface ButtonMainProps {
title:string  //Texto que vai aparecer dentro do botão
onPress: () => void // Função que será executada quando o botão for pressionado

}

//Componente funcional do botão
export const ButtonMain: React.FC<ButtonMainProps> = ({title, onPress}) => {
    return(
//TouchableOpacity é o botão "clicável" que dá efeito de opacidade ao ser pressionado
<TouchableOpacity style={Styles.button}  //Aplica os estilos definidos da pasta "Styles./ButtonMain.ts"
onPress={onPress}  //Liga a função de clique passada como prop
activeOpacity={0.7}  //Define a transparência quando o botão é pressionado
>

{/* Texto dentro do botão*/ }
<Text style={Styles.text}> {title} </Text>

</TouchableOpacity>
    )
}
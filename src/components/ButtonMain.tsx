import React from "react";
import {TouchableOpacity,Text} from 'react-native';
import { Colors } from "../styles/colors"; //importar estilos de outro arquivo
import {ButtonOneProps}

//Componente funcional do botão
export const ButtonOne: React.FC<ButtonOneProps> = ({title, onPress}) => {
    return(

//TouchableOpacity é o botão "clicável" que dá efeito de opacidade ao ser pressionado
<TouchableOpacity

style={{backgroundColor: Colors.spotifyBlack}}  //Aplica os estilos definidos da pasta "Styles./ButtonMain.ts"
onPress={onPress}  //Liga a função de clique passada como prop
activeOpacity={0.7}  //Define a transparência quando o botão é pressionado
>

{/* Texto dentro do botão*/ }
<Text style={{backgroundColor: Colors.white}}> {title} </Text>

</TouchableOpacity>
    )
}
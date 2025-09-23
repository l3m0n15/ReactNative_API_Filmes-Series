//Estilo do botão Main

import {StyleSheet,Text} from "react-native";

const Style = StyleSheet.create({
button:{
backgroundColor: '#1DB954', //cor de fundo (verde)
paddingVertical: 14, // Espaço interno em cima e embaixo
paddingHorizontal:40, // Espaço interno nas laterais 
borderRadius: 50, //Deixa o botão com bordas arrendadas
alignItems: 'center', // Centraliza o conteúdo horizontalmente
justifyContent:'center', // Centraliza o conteúdo verticalmente
},

text:{
    color: '#FFFFFF', //Cor do texto (branco)
    fontSize: 16, //Tamanho da fonte
    fontWeight: 'bold', //Deixa o texto em negrito
},

});
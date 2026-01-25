import React from "react";
import {TextInput} from 'react-native';
import {Styles} from '../styles/InputField'
import {InputFieldProps} from '../types/InputField';

export const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,

}) => {
return(
    <TextInput
    style={Styles.input}
    placeholder={placeholder}
    placeholderTextColor='#888'
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    />
)

}
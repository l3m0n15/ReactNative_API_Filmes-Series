import React from "react";
import {TouchableOpacity, Text, View} from  'react-native';
import {Styles} from '../styles/ButtonSocialMedia';
import { Colors } from "../styles/colors";
import { ButtonSocialMediaProps } from '../types/ButtonSocialMedia';

export const ButtonSocialMedia: React.FC<ButtonSocialMediaProps> = ({
    title,
    onPress,
    provider,
}) =>{
    const getIcon =() => {
        switch (provider) {
            case 'google': return '🔍';
             case 'facebook': return '📘';
              case 'instagram': return '📷';
              default: return '';

        }
    };
    return(
        <TouchableOpacity
        style={Styles.button}
        onPress={onPress}
        activeOpacity={0.8}
        >

<Text style={{fontSize: 20, marginRight: 10}}>{getIcon()}</Text>
<Text style={[Styles.text,{ color: Colors.white}]}>{title}</Text>

        </TouchableOpacity>
    );
};
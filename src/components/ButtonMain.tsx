import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {Styles as ButtonStyles} from "../styles/ButtonMain";
import {Colors} from "../styles/colors";
import {ButtonOneProps} from "../types/ButtonMainP";

export const ButtonOne: React.FC<ButtonOneProps> = ({title, onPress, backgroundColor, textColor}) => {
    const bg = backgroundColor ?? Colors.spotifyGreen;
    const fg = textColor ?? Colors.white;

    return (
        <TouchableOpacity
            style={[ButtonStyles.button, {backgroundColor: bg}]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[ButtonStyles.text, {color: fg}]}>{title}</Text>
        </TouchableOpacity>
    );
};
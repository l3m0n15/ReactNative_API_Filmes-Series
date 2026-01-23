import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Styles } from "../styles/ButtonSocialMedia";
import { Colors } from "../styles/colors";
import { ButtonSocialMediaProps } from "../types/ButtonSocialMedia";

export const ButtonSocialMedia: React.FC<ButtonSocialMediaProps> = ({
    title,
    onPress,
    provider,
}) => {
    // Por enquanto sem ícones reais, vamos adicionar emojis placeholder
    const getIcon = () => {
        switch (provider) {
            case 'google': return '🔍';
            case 'facebook': return '📘';
            case 'instagram': return '📷';
            case 'apple': return '🍎';
            case 'phone': return '📱';
            default: return '';
        }
    };

    return (
        <TouchableOpacity
            style={Styles.button}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={Styles.iconContainer}>
                <Text style={{ fontSize: 20 }}>{getIcon()}</Text>
            </View>
            <Text style={[Styles.text, { color: Colors.white }]}>{title}</Text>
        </TouchableOpacity>
    );
};

import { StyleSheet} from "react-native";

export const Styles = StyleSheet.create({
    button: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius:25,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: 'transparent',
        minWidth: 280,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});
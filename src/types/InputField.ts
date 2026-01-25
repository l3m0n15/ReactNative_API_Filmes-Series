export interface InputFieldProps {
    placeholder:string;
    value:string
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}
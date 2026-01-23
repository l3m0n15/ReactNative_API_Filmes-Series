export interface ButtonSocialMediaProps {
    title: string;
    onPress: () => void;
    icon?: string;
    provider: 'google' | 'facebook' | 'instagram' | 'apple' | 'phone';
}

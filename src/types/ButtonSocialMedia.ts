export interface ButtonSocialMediaProps {
    title: string;
    onPress: () => void;
    provider: 'google'| 'facebook'|'instagram'
}
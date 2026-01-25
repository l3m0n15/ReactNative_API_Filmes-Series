export const TMDB_CONFIG = {
API_KEY: 'SUA_CHAVE_AQUI',
BASE_URL: 'https://api.themoviedb.org/3',
IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
LANGUAGE: 'pt-BR',
REGION: 'BR',

};

export const getImageUrl = (
    path: string | null,
    size: 'w185' | 'w342' | 'w500' | 'w780' | 'w1280' | 'original' = 'w500' ): string => {
        if (!path) return '';
        return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
    };
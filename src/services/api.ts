import { TMDB_CONFIG } from "../config/tmdb";

class ApiService{
private baseUrl = TMDB_CONFIG.BASE_URL;
private apiKey = TMDB_CONFIG.API_KEY;
    
async get<T>(endpoint:string): Promise<T>{
    const url = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}&language=${TMDB_CONFIG.LANGUAGE}`;

    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na API:', error);
        throw error;
    }
}
}

export const api =new ApiService();
import { api } from "./api";
import { Movie,TVShow,TMDBResponse } from "../types/Movie";
import { executeNativeBackPress } from "react-native-screens";

export const tmdbService ={
    getPopularMovies: async (): Promise<TMDBResponse<Movie>> => {
        return api.get<TMDBResponse<Movie>>('/movie/popular');
    },

    getTredingMovies: async (): Promise< TMDBResponse<Movie>> => {
        return api.get<TMDBResponse<Movie>>('/trending/movie/week');
    },

    getTopRatedMovies: async(): Promise< TMDBResponse<Movie>> => {
        return api.get<TMDBResponse<Movie>>('/movie/top_rated');
    },

    getPopularTVShows: async(): Promise< TMDBResponse<Movie>> => {
        return api.get<TMDBResponse<Movie>>('/tv/popula');
    },

    getTrendingTVShows: async(): Promise <TMDBResponse<Movie>> => {
        return api.get< TMDBResponse<Movie>>('/trending/tv/week');
    },

    searchMoveis: async (query: string): Promise<TMDBResponse<Movie>> => {
        return api.get<TMDBResponse<Movie>>(`/search/movie?query=${endocodeURIComponent(query)}`);
    },
}
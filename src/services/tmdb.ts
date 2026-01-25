import { api } from "./api";
import { Movie, TVShow, TMDBResponse } from "../types/Movie";

export const tmdbService = {
  getPopularMovies: async (): Promise<TMDBResponse<Movie>> => {
    return api.get<TMDBResponse<Movie>>("/movie/popular");
  },

  getTrendingMovies: async (): Promise<TMDBResponse<Movie>> => {
    return api.get<TMDBResponse<Movie>>("/trending/movie/week");
  },

  getTopRatedMovies: async (): Promise<TMDBResponse<Movie>> => {
    return api.get<TMDBResponse<Movie>>("/movie/top_rated");
  },

  getPopularTVShows: async (): Promise<TMDBResponse<TVShow>> => {
    return api.get<TMDBResponse<TVShow>>("/tv/popular");
  },

  getTrendingTVShows: async (): Promise<TMDBResponse<TVShow>> => {
    return api.get<TMDBResponse<TVShow>>("/trending/tv/week");
  },

  searchMovies: async (query: string): Promise<TMDBResponse<Movie>> => {
    return api.get<TMDBResponse<Movie>>(
      `/search/movie?query=${encodeURIComponent(query)}`,
    );
  },

  searchTVShows: async (query: string): Promise<TMDBResponse<TVShow>> => {
    return api.get<TMDBResponse<TVShow>>(
      `/search/tv?query=${encodeURIComponent(query)}`,
    );
  },
};

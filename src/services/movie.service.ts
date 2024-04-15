import axios from "axios";
import { axiosWithTimeout } from "../utils/fetchWithTimeout";

class MoviesService {
  async getMoviesTrending() {
    const res = await axiosWithTimeout(`/3/trending/movie/day?language=en-US`, {
      method: "GET",
      timeout: 30000,
    });
    const { data } = res;
    return data;
  }
  async getMoviesUpcoming() {
    const res = await axiosWithTimeout(
      `/3/movie/upcoming?language=en-US&page=1`,
      {
        method: "GET",
        timeout: 30000,
      }
    );
    const { data } = res;
    return data;
  }
  async getMoviesTopRate() {
    const res = await axiosWithTimeout(
      `/3/tv/top_rated?language=en-US&page=1`,
      {
        method: "GET",
        timeout: 30000,
      }
    );
    const { data } = res;
    return data;
  }
  async getMoviesDetail(movie_id: string) {
    const res = await axiosWithTimeout(`/3/movie/${movie_id}?language=en-US`, {
      method: "GET",
      timeout: 30000,
    });
    const { data } = res;
    return data;
  }
  async getSimilarMovies(movie_id: string) {
    const res = await axiosWithTimeout(
      `3/movie/${movie_id}/similar?language=en-US`,
      {
        method: "GET",
        timeout: 30000,
      }
    );
    const { data } = res;
    return data;
  }
  async getMoviesByCast(castId: string) {
    const res = await axiosWithTimeout(
      `3/person/${castId}/movie_credits?language=en-US`,
      {
        method: "GET",
        timeout: 30000,
      }
    );
    const { data } = res;
    return data;
  }
}

export const movieService = new MoviesService();

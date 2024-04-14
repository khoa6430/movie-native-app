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
}

export const movieService = new MoviesService();

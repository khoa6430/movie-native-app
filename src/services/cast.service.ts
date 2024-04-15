import axios from "axios";
import { axiosWithTimeout } from "../utils/fetchWithTimeout";

class CastService {
  async getCastForMovie(movie_id: string) {
    const res = await axiosWithTimeout(
      `3/movie/${movie_id}/credits?language=en-US`,
      {
        method: "GET",
        timeout: 30000,
      }
    );
    const { data } = res;
    return data;
  }
  async getDetailsCast(cast_id: string) {
    const res = await axiosWithTimeout(`3/person/${cast_id}?language=en-US`, {
      method: "GET",
      timeout: 30000,
    });
    const { data } = res;
    return data;
  }
}

export const castService = new CastService();

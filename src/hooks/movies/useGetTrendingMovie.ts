import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { Movies } from "../../types/movie.type";

export const useGetTrendingMovie = () => {
  return useQuery<Movies>({
    queryKey: [QUERY_KEYS.GET_MOVIES_TRENDING],
    queryFn: () => {
      return movieService.getMoviesTrending();
    },
  });
};

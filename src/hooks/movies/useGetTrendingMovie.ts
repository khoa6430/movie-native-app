import { useQuery } from "@tanstack/react-query";
import { movieService } from "../../services/movie.service";
import { QUERY_KEYS } from "../../constants/query-key";

export const useGetTrendingMovie = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_MOVIES_TRENDING],
    queryFn: () => {
      return movieService.getMoviesTrending();
    },
  });
};

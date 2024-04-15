import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { TrendingMovieList } from "../../types/movie.type";

export const useGetTrendingMovie = () => {
  return useQuery<TrendingMovieList>({
    queryKey: [QUERY_KEYS.GET_TRENDING_MOVIES],
    queryFn: () => {
      return movieService.getMoviesTrending();
    },
  });
};

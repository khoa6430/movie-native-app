import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { TopRatedMovieList, TrendingMovieList } from "../../types/movie.type";

export const useGetTopRatedMovie = () => {
  return useQuery<TopRatedMovieList>({
    queryKey: [QUERY_KEYS.GET_TOP_RATE_MOVIES],
    queryFn: () => {
      return movieService.getMoviesTopRate();
    },
  });
};

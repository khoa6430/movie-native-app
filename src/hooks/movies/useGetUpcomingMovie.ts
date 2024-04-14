import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { TrendingMovieList, UpcomingMovieList } from "../../types/movie.type";

export const useGetUpcomingMovie = () => {
  return useQuery<UpcomingMovieList>({
    queryKey: [QUERY_KEYS.GET_MOVIES_UPCOMING],
    queryFn: () => {
      return movieService.getMoviesUpcoming();
    },
  });
};

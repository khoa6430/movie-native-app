import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { DetailsMovie, TrendingMovieList } from "../../types/movie.type";

export const useGetDetailsMovie = (idMovie: string) => {
  return useQuery<DetailsMovie>({
    queryKey: [QUERY_KEYS.GET_DETAILS_MOVIE],
    queryFn: () => {
      return movieService.getMoviesDetail(idMovie);
    },
  });
};

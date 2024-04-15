import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import {
  DetailsMovie,
  MovieByCastList,
  TrendingMovieList,
} from "../../types/movie.type";

export const useGetMoviesByCast = (idCast: string) => {
  return useQuery<MovieByCastList>({
    queryKey: [QUERY_KEYS.GET_MOVIES_BY_CAST, idCast],
    queryFn: () => {
      return movieService.getMoviesByCast(idCast);
    },
  });
};

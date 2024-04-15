import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { DetailsMovie, TrendingMovieList } from "../../types/movie.type";
import { CastList } from "../../types/cast.type";
import { castService } from "../../services/cast.service";

export const useGetCasts = (idMovie: string) => {
  return useQuery<CastList>({
    queryKey: [QUERY_KEYS.GET_CAST_LIST],
    queryFn: () => {
      return castService.getCastForMovie(idMovie);
    },
  });
};

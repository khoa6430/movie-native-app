import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { DetailsMovie, TrendingMovieList } from "../../types/movie.type";
import { CastList, DetailsCast } from "../../types/cast.type";
import { castService } from "../../services/cast.service";

export const useGetDetailsCast = (castId: string) => {
  return useQuery<DetailsCast>({
    queryKey: [QUERY_KEYS.GET_DETAILS_CASTS],
    queryFn: () => {
      return castService.getDetailsCast(castId);
    },
  });
};

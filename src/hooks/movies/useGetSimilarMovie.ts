import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query-key";
import { movieService } from "../../services/movie.service";
import { SimilarMovieList } from "../../types/movie.type";

export const useGetSimilarMovie = (idMovie: string) => {
  return useQuery<SimilarMovieList>({
    queryKey: [QUERY_KEYS.GET_SIMILAR_MOVIE, idMovie],
    queryFn: () => {
      return movieService.getSimilarMovies(idMovie);
    },
  });
};

import axios from "axios";
import { apiKey } from "../constants/constants";

// endpoints
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

// dynamic endpoint
const movieDetailsEndpoint = (id: any) =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: any) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const movieSimilarEndpoint = (id: any) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

// for search
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

// person endpoint
const personDetailEndpoint = (id: any) =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const persoMoviesEndpoint = (id: any) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

// function to fetch url
export const image500 = (path: any) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = (path: any) =>
  path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = (path: any) =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

// fallback images
export const fallbackMoviePoster =
  "https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg";
export const fallbackPersonImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU";

const apiCall = async ({
  endpoint,
  params,
}: {
  endpoint: any;
  params?: any;
}) => {
  const options = {
    methods: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const responce = await axios.request(options);
    return responce.data;
  } catch (err) {
    console.log("error : " + err);
    return {};
  }
};

// this will get all trending movies endpoint

export const fetchTrendingMovies = () => {
  return apiCall({ endpoint: trendingMoviesEndpoint });
};

export const fetchUpcomingMovies = () => {
  return apiCall({ endpoint: upcomingMoviesEndpoint });
};

export const fetchTopRatedMovies = () => {
  return apiCall({ endpoint: topRatedMoviesEndpoint });
};

// function for dynamic endpoints
export const fetchMovieDetails = (id: any) => {
  return apiCall({ endpoint: movieDetailsEndpoint(id) });
};
export const fetchMovieCredits = (id: any) => {
  return apiCall({ endpoint: movieCreditsEndpoint(id) });
};
export const fetchSimilarMovies = (id: any) => {
  return apiCall({ endpoint: movieSimilarEndpoint(id) });
};

// feching person
export const fetchPersonDetails = (id: any) => {
  return apiCall({ endpoint: personDetailEndpoint(id) });
};

export const fetchPersonMovies = (id: any) => {
  return apiCall({
    endpoint: persoMoviesEndpoint(id),
  });
};

// searching
export const searchMovies = (params: any) => {
  return apiCall({ endpoint: searchMoviesEndpoint, params });
};

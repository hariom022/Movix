import axios from "axios";
import { baseURL, ApiUrl } from "./ApiURL";
import { options } from "./Utils";

export const getPopularMovies = () => {
  return fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.json())
    .then((data) => data);
};

export const searchMoviesByTitle = (searchKeyword) => {
  //  https://api.themoviedb.org/3/search/movie?query=batman${pageNumber>0?'&page=${page}':null}
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data);
};

export const getTopRatedMovies = () => {
  return axios.get(`${baseURL}${ApiUrl.fetchTopRated}`).then(
    (data) => data
    //   dispatch({ type: "MOVIE_DATA", payload: data.data.results })
  );
};

export const movieDetails = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then((response) => response.json())
    .then((data) => data);
};

export const searchTvData = (searchKeyword) => {
  return fetch(
    `https://api.themoviedb.org/3/search/tv?query=${searchKeyword}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data);
};

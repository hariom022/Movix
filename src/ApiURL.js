export const API_KEY = "7e9d38882728295b6fefe35ce817642e";
export const baseURL = "https://api.themoviedb.org/3";
export const ApiUrl = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  searchMoviesByTitleUrl: "https://api.themoviedb.org/3/search/movie?query=",
};

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTlkMzg4ODI3MjgyOTViNmZlZmUzNWNlODE3NjQyZSIsInN1YiI6IjY0Yjc5NWFjNWFhZGM0MDBlMjk3ODE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz7XSn3sLOzboYue1aw7W2yw-MmEhrpVGCXIWjG_nCM",
  },
};

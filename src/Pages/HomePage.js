import { useEffect, useState } from "react";
import "../App.scss";
import axios from "axios";
import { ApiUrl, baseURL } from "../ApiURL";
import {
  getPopularMovies,
  searchMoviesByTitle,
  getTopRatedMovies,
  movieDetails,
  searchTvData,
  movieTrailer,
} from "../ApiCalls";
import TopRated from "../TopRated/TopRated";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";
import Popular from "../Popular/Popular";
import { Route, Routes } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import BannerImage from "../BannerImage/BannerImage";
import Footer from "../Footer/Footer";
import SearchMovie from "../SearchMovie/SearchMovie";
import MovieDetails from "../Details/MovieDetails";
import SearchTV from "../SearchMovie/SearchTV";
import MovieVideo from "../Video/MovieVideo";

const HomePage = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((state) => state.Reducer.movieData);
  const trending = useSelector((state) => state.Reducer1.trendingData);
  const popular = useSelector((state) => state.PopularReducer.popularData);

  // console.log("popular",popular)
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchmvie = () => {
    dispatch({ type: "IS_LOADING", payload: true });
    getTopRatedMovies().then((data) =>
      dispatch({ type: "MOVIE_DATA", payload: data.data.results })
    );
    const data1 = axios
      .get(`${baseURL}${ApiUrl.fetchTrending}`)
      .then((data) => {
        dispatch({ type: "TRENDING", payload: data.data.results });
      });
  };

  useEffect(() => {
    fetchmvie();
    getPopularMovies().then((data) =>
      dispatch({ type: "POPULARDATA", payload: data.results })
    );
  }, []);

  const searchDataHandler = () => {
    searchMoviesByTitle(searchKeyword)
      .then((data) => dispatch({ type: "SEARCHDATA", payload: data.results }))
      .catch((error) => {
        dispatch({ type: "ERROR_IN_SEARCH_DATA", payload: "" });
      });
    searchTvData(searchKeyword).then((data) => data.results);
  };

  const movieSearchHandler = (e) => {
    const search = e.target.value;
    setSearchKeyword(search);
  };

  const movieDetailsDataHandler = (id) => {
    movieDetails(id).then((data) =>
      dispatch({ type: "MOVIE_DETAILS", payload: data })
    );
    movieTrailer(id).then((data) => console.log("movievideo", data));
  };

  return (
    <div className="home-page">
      <BannerImage
        searchDataHandler={searchDataHandler}
        movieSearchHandler={movieSearchHandler}
      />
      <SearchTV />
      <SearchMovie />
      <TopRated
        topRated={topRated}
        movieDetailsDataHandler={movieDetailsDataHandler}
      />

      <Trending
        trending={trending}
        movieDetailsDataHandler={movieDetailsDataHandler}
      />

      <Popular
        popular={popular}
        movieDetailsDataHandler={movieDetailsDataHandler}
      />
    </div>
  );
};

export default HomePage;

{
  /* {movie.isLoading ? "Loading..." : <Movie movie={movie} />} */
}

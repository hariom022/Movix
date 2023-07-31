import { combineReducers } from "redux";
import Reducer from "./Reducer";
import Reducer1 from "./Reducer1";
import PopularReducer from "./PopularReducer";
import MovieListReducer from "./MovieListReducer";
import TvShowsListReducer from "./TvShowsListReducer";
import SearchMovieReducer from "./SearchMovieReducer";
import MovieDetailsReducer from "./MovieDetailsReducer";
import TvSeriesReducer from "./TvSeriesReducer";

const RootReducer = combineReducers({
  Reducer: Reducer,
  Reducer1: Reducer1,
  PopularReducer: PopularReducer,
  MovieListReducer: MovieListReducer,
  TvShowsListReducer: TvShowsListReducer,
  SearchMovieReducer: SearchMovieReducer,
  MovieDetailsReducer: MovieDetailsReducer,
  TvSeriesReducer: TvSeriesReducer,
});

export default RootReducer;

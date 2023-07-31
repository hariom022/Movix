import React from "react";
import { useSelector } from "react-redux";
import "./SearchMovie.scss";

const SearchMovie = () => {
  const search = useSelector(
    (state) => state.SearchMovieReducer.searchMovieData
  );
  // console.log("search", search);

  return (
    <div className="search-movie-conrainer">
      {search.map((item, index) => {
        return (
          <div className="search-img-title">
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt=""
              width={250}
              height={300}
            />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SearchMovie;

// src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}

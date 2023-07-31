import React from "react";
import { useSelector } from "react-redux";
import "./MovieDetails.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const movieDetailsData = useSelector(
    (state) => state.MovieDetailsReducer.movieDetail
  );
  console.log("movieDetailsData", movieDetailsData);

  const nevigate = useNavigate();

  return (
    <div className="main-movie-details-container">
      <div className="movie-details-container">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetailsData.poster_path}`}
          alt=""
          width={350}
          height={450}
        />
        <div className="movie-details">
          <h3>{movieDetailsData.title}</h3>
          <p>
            {" "}
            <b>Release Date :</b> {movieDetailsData.release_date}
          </p>
          <p>
            {" "}
            <b>Rating : </b>
            {movieDetailsData.vote_average}
          </p>
          <p>
            {" "}
            <b>Budget:</b>
            {movieDetailsData.budget}
          </p>
          <p>
            <b>Total Collection :</b> {movieDetailsData.revenue}
          </p>
          <p>
            {" "}
            <b>Overview :</b>
            {movieDetailsData.overview}
          </p>
        </div>
      </div>
      <button class="button" onClick={() => nevigate(-1)}>
        Back
      </button>
    </div>
  );
};
export default MovieDetails;

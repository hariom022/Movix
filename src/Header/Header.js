import React, { useState } from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MoviesList/MovieList";
import TvShows from "./TV Shows/TvShows";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  let { tvSearchHandler, tvSeriesSearchHandler } = props;

  const [showModal, setShowModal] = useState(false);
  const [tvModal, setTvModal] = useState(false);

  const dispatch = useDispatch();
  const movielist = useSelector(
    (state) => state.MovieListReducer.movieListData
  );

  const tvlist = useSelector((state) => state.TvShowsListReducer.tvShowList);
  // console.log("tvlist", tvlist);

  const movieListHandler = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTlkMzg4ODI3MjgyOTViNmZlZmUzNWNlODE3NjQyZSIsInN1YiI6IjY0Yjc5NWFjNWFhZGM0MDBlMjk3ODE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz7XSn3sLOzboYue1aw7W2yw-MmEhrpVGCXIWjG_nCM",
      },
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list", options)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "MOVIELIST", payload: data.genres }));
    setShowModal(true);
  };

  const tvListShowHandler = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTlkMzg4ODI3MjgyOTViNmZlZmUzNWNlODE3NjQyZSIsInN1YiI6IjY0Yjc5NWFjNWFhZGM0MDBlMjk3ODE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz7XSn3sLOzboYue1aw7W2yw-MmEhrpVGCXIWjG_nCM",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/tv/list", options)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "TVSHOWLIST", payload: data.genres }));
    setTvModal(true);
  };
  return (
    <div className="main-header">
      <div className="header">
        <div className="movix-log">
          <img src="movix-logo.png" alt="" width={30} height={30} />
          <img src="img-main.svg" alt="" width={143} height={30} />
        </div>
        <div className="header-list">
          <ul>
            <li onClick={() => movieListHandler()}>Movie</li>
            <li onClick={() => tvListShowHandler()}>TV Shows</li>
            <li>
              <div className="button">
                <input type="text" />
                <i className="fa fa-search"></i>
              </div>
            </li>
          </ul>
          <div className="menu-link">
            <MenuIcon style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <div className="movie-list">
        <MovieList
          movielist={movielist}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </div>
      <div className="tv-list">
        <TvShows tvlist={tvlist} tvModal={tvModal} setTvModal={setTvModal} />
      </div>
    </div>
  );
};

export default Header;

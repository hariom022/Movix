import React from "react";
import "./TopRated.scss";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const TopRated = (props) => {
  let { topRated, movieDetailsDataHandler } = props;

  return (
    <>
      <h3>Top Rated</h3>
      <div className="main-movie">
        <div className="movie">
          <OwlCarousel
            className="owl-theme"
            items={6}
            loop
            nav={false}
            dots={false}
            margin={15}
          >
            {topRated &&
              topRated.length > 0 &&
              topRated.map((item, index) => {
                return (
                  <div className="item">
                    <Link to={`/toprated/details/${item.id}`}>
                      <img
                        width={150}
                        height={250}
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        alt=""
                        onClick={() => movieDetailsDataHandler(item.id)}
                      />
                    </Link>
                    <p>Title :{item.original_title}</p>
                  </div>
                );
              })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};
export default TopRated;

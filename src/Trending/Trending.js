import React from "react";
import "./Trending.scss";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const Trending = (props) => {
  let { trending, movieDetailsDataHandler } = props;

  return (
    <div className="trending-page">
      <h3>Trending</h3>
      <div className="trending-main-page">
        <OwlCarousel
          className="owl-theme"
          items={6}
          loop
          nav={false}
          dots={false}
          margin={15}
        >
          {trending &&
            trending.length > 0 &&
            trending.map((item, index) => {
              return (
                <div className="item">
                  <Link to={`/trending/details/${item.id}`}>
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
  );
};
export default Trending;

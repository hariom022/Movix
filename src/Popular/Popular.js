import React from "react";
import "./Popular.scss";
import OwlCarousel from "react-owl-carousel";
import { Link, useNavigate } from "react-router-dom";

const Popular = (props) => {
  let { popular, movieDetailsDataHandler } = props;

  // const navigate = useNavigate();

  return (
    <div className="item popular-data-container">
      <h3>Poplar</h3>
      <div className="popular">
        <OwlCarousel
          className="owl-theme"
          items={6}
          loop
          nav={false}
          dots={false}
          margin={15}
        >
          {popular &&
            popular.length > 0 &&
            popular.map((item, index) => {
              return (
                <div className="item">
                  <Link to={`/popular/details/${item.id}`}>
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
export default Popular;

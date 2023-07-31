import React from "react";
import { useSelector } from "react-redux";

const SearchTV = () => {
  const tvseries = useSelector((state) => state.TvSeriesReducer.tvseries);
  return (
    <div>
      {tvseries &&
        tvseries.length > 0 &&
        tvseries.map((item, index) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                width={250}
                height={300}
                alt=""
              />
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  );
};
export default SearchTV;

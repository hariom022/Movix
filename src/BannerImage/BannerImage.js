import React from "react";
import "./BannerImage.scss";
import Form from "react-bootstrap/Form";

const BannerImage = (props) => {
  let { movieSearchHandler, searchDataHandler } = props;

  return (
    <div className="bannerImage">
      <div
        style={{
          backgroundImage: 'url("img8.jpg")',
          height: 500,
        }}
      >
        <div className="baner-search-button">
          <div className="button-search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => movieSearchHandler(e)}
            />
            <button onClick={() => searchDataHandler()}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerImage;

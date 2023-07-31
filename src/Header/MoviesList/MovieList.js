import React from "react";
import "./MovieList.scss";

const MovieList = (props) => {
  let { movielist, showModal, setShowModal } = props;

//   console.log("movieList", movielist);

  const MyModal = () => {
    return (
      <div className="main">
        <div className="modal-container" onClick={()=>setShowModal(false)}></div>
        <button onClick={() => setShowModal(false)}>close</button>
        <div className="movielist">
          
          {movielist.map((item, index) => {
            return (
              <div className="movie-list-container">
                <div className="container">
                <p key={item.index}>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    );
  };
  return <>{showModal && <MyModal />}</>;
};
export default MovieList;

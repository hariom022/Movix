import React from "react";
import './TvShows.scss'

const TvShows = (props) => {
    let { tvlist, tvModal, setTvModal } = props;
  
  //   console.log("tvlist", tvlist);
  
    const MyTvModal = () => {
      return (
        <div className="TV-main">
          <div className="tv-modal-container " onClick={()=>setTvModal(false)}></div>
          <button onClick={() => setTvModal(false)}>close</button>
          <div className="tvList">
            
            {tvlist.map((item, index) => {
              return (
                <div className="tv-list-container">
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
    return <>{tvModal && <MyTvModal />}</>;
  };
  export default TvShows;
const initialState = {
  movieListData: [],
};

const MovieListReducer = (state = initialState, action) => {
//    console.log("action payload",action.payload)

  switch (action.type) {
    case "MOVIELIST": {
      return {
        ...state,
        movieListData: [state.movieListData, ...action.payload],
      };
    }

    default:
      return state;
  }
};
export default MovieListReducer;

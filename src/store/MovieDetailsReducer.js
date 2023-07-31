const initialState = {
  movieDetail: "",
};

const MovieDetailsReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "MOVIE_DETAILS": {
      return { movieDetail: action.payload };
    }

    default:
      return state;
  }
};

export default MovieDetailsReducer;

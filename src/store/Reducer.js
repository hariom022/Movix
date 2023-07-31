const initialState = {
  movieData: [],
  isLoader: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOADING": {
      return {
        ...state,
        isLoader: true,
      };
    }
    case "MOVIE_DATA": {
      return {
        ...state,
        movieData: [...state.movieData, ...action.payload],
        isLoader: false,
      };
    }

    default:
      return state;
  }
};

export default Reducer;

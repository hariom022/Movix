const initialState = {
  searchMovieData: [],
  isLoader: false,
  errorInSearchMovieData: false,
};
const SearchMovieReducer = (state = initialState, action) => {
  // console.log("action",action)

  switch (action.type) {
    case "IS_LOADING": {
      return {
        ...state,
        isLoader: true,
      };
    }
    case "SEARCHDATA": {
      return {
        ...state,
        searchMovieData: [...state.searchMovieData, ...action.payload],
        isLoader: false,
      };
    }
    case "ERROR_IN_SEARCH_DATA": {
      return {
        ...state,
        errorInSearchMovieData: true,
        isLoader: false,
      };
    }

    default:
      return state;
  }
};
export default SearchMovieReducer;

const initialState = {
  tvseries: [],
};

const TvSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TV_SERIES": {
      return {
        ...state,
        tvseries: [...state.tvseries, action.payload],
      };
    }

    default:
      return state;
  }
};
export default TvSeriesReducer;

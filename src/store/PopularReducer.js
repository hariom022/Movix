const initialState = {
  popularData: [],
};

const PopularReducer = (state = initialState, action) => {
  // console.log("action", action);

  switch (action.type) {
    case "POPULARDATA": {
      return {
        ...state,
        popularData: [...state.popularData, ...action.payload],
      };
    }

    default:
      return state;
  }
};
export default PopularReducer;

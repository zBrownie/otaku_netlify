const initState = {
  userdata: {},
  animes: [],
  season: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ANIMES":
      return { ...state, animes: action.payload };
    case "GET_SEASON":
      return { ...state, season: action.payload };
    case "GET_USER":
      return { ...state, userdata: action.payload };

    default:
      return state;
  }
};

export default reducer;

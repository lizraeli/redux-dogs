const defaultState = {
  breedList: [],
  error: ""
};

const breeds = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_BREEDS":
      return { breedList: action.breeds, error: "" };
    case "GET_BREEDS_ERROR":
      return { ...defaultState, error: action.error };
    default:
      return state;
  }
};

export default breeds;

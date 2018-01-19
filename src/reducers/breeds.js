const defaultState = [];

const breeds = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_BREEDS_RECEIVED":
      return action.breeds;
    default:
      return state;
  }
};

export default breeds;

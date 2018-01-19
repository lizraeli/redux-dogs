const defaultState = {
  dog: false,
  breeds: false
};

const loading = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_BREEDS":
      return { ...state, breeds: true };
    case "GET_BREEDS_RECEIVED":
      return { ...state, breeds: false };
    case "GET_BREEDS_ERROR":
      return { ...state, breeds: false };
    case "GET_DOG":
      return { ...state, dog: true };
    case "GET_DOG_RECEIVED":
      return { ...state, dog: false };
    case "GET_DOG_ERROR":
      return { ...state, dog: false };
    default:
      return state;
  }
};

export default loading;

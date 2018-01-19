const defaultState = {
  dog: false,
  breeds: false
};

const error = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_BREEDS":
      return { ...state, breeds: false };
    case "GET_BREEDS_RECEIVED":
      return { ...state, breeds: false };
    case "GET_BREEDS_ERROR":
      return { ...state, breeds: true };
    case "GET_DOG":
      return { ...state, dog: false };
    case "GET_DOG_RECEIVED":
      return { ...state, dog: false };
    case "GET_DOG_ERROR":
      return { ...state, dog: true };
    default:
      return state;
  }
};

export default error;

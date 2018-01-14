const defaultState = {
  imageURL: "",
  breed: "",
  subBreed: "",
  isFav: false,
  error: ""
};

const imageURL = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DOG":
      return defaultState;
    case "SET_DOG":
      return { ...action.dog, error: "" };
    case "ADD_TO_FAV":
      return { ...state, isFav: true };
    case "REMOVE_FROM_FAV":
      return { ...state, isFav: false };
    case "GET_DOG_ERROR":
      return { ...defaultState, error: action.error };
    default:
      return state;
  }
};

export default imageURL;

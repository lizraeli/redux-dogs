const defaultState = {
  imageURL: "",
  breed: "",
  subBreed: "",
  isFav: false
};

const imageURL = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DOG_RECEIVED":
      return action.dog;
    case "GET_DOG_ERROR":
      return defaultState;
    case "ADD_TO_FAV":
      return { ...state, isFav: true };
    case "REMOVE_FROM_FAV":
      return { ...state, isFav: false };
  
    default:
      return state;
  }
};

export default imageURL;

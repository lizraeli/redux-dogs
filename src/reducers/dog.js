const defaultState = {
  imageURL: "",
  breed: "",
  subBreed: "",
  error: ""
};

const imageURL = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DOG":
      return defaultState;
    case "SET_DOG":
      return { ...action.dog, error: "" };
    case "GET_DOG_ERROR":
      return { ...defaultState, error: action.error };
    default:
      return state;
  }
};

export default imageURL;

const defaultState = {
  imageURL: "",
  breed: "",
  subBreed: ""
};

const imageURL = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DOG":
      return defaultState;
    case "SET_DOG":
      return action.dog;
    default:
      return state;
  }
};

export default imageURL;

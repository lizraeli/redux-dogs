const imageURL = (state = "", action) => {
  switch (action.type) {
    case "SET_IMAGE_URL":
      return action.imageURL;

    default:
      return state;
  }
};

export default imageURL;

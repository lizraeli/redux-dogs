const breed = (state = [], action) => {
  switch (action.type) {
    case "SET_BREEDS":
      return action.breeds;

    default:
      return state;
  }
};

export default breed;

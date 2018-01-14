const defaultState = [];

const favorites = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return [...state, action.dog];
    case "REMOVE_FROM_FAV":
      return state.filter(dog => dog.imageURL !== action.imageURL);

    default:
      return state;
  }
};

export default favorites;

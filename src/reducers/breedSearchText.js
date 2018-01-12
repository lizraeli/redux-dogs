const breedSearchText = (state = "", action) => {
  switch (action.type) {
    case "SET_BREED_SEARCH_TEXT":
      return action.searchText;

    default:
      return state;
  }
};

export default breedSearchText;

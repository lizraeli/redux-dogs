import { dogAPI } from "../api";

export const setImageUrl = imageURL => ({
  type: "SET_IMAGE_URL",
  imageURL
});

export const getDog = () => ({
  type: "GET_DOG"
});

export const getDogError = error => ({
  type: "GET_DOG_ERROR",
  error
});

export const setDog = dog => ({
  type: "SET_DOG",
  dog
});

export const setBreeds = breeds => ({
  type: "SET_BREEDS",
  breeds
});

export const getBreeds = () => ({
  type: "GET_BREEDS"
});

export const getBreedsError = error => ({
  type: "GET_BREEDS_ERROR",
  error
});

export const setBreedSearchText = searchText => ({
  type: "SET_BREED_SEARCH_TEXT",
  searchText
});

export const getRandomDog = () => {
  return dispatch => {
    dispatch(getDog());
    dogAPI
      .getRandomDog()
      .then(response => {
        dispatch(setDog({ imageURL: response.data.message }));
      })
      .catch(e => {
        dispatch(getDogError(e.message));
      });
  };
};

export const getRandomDogWithBreed = breed => {
  return dispatch => {
    dispatch(getDog());
    dogAPI
      .getRandomDogWithBreed(breed)
      .then(response => {
        dispatch(
          setDog({
            imageURL: response.data.message,
            breed
          })
        );
      })
      .catch(err => {
        dispatch(getDogError(err));
      });
  };
};

export const getRandomDogWithBreedAndSub = (breed, subBreed) => {
  return dispatch => {
    dispatch(getDog());
    dogAPI
      .getRandomDogWithBreedAndSub(breed, subBreed)
      .then(response => {
        dispatch(
          setDog({
            imageURL: response.data.message,
            breed,
            subBreed
          })
        );
      })
      .catch(err => {
        dispatch(getDogError(err));
      });
  };
};

export const getAllBreeds = () => {
  return dispatch => {
    dispatch(getBreeds());
    dogAPI
      .getAllBreeds()
      .then(response => {
        const breedDict = response.data.message;
        const masterBreeds = Object.keys(breedDict);
        const allBreeds = masterBreeds.map(name => ({
          name,
          subBreeds: breedDict[name]
        }));
        dispatch(setBreeds(allBreeds));
      })
      .catch(err => {
        dispatch(getBreedsError(err));
      });
  };
};

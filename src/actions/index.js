import axios from "axios";
import { dogAPI } from "../api";

export const setImageUrl = imageURL => ({
  type: "SET_IMAGE_URL",
  imageURL
});

export const getDog = () => ({
  type: "GET_DOG"
});

export const setDog = dog => ({
  type: "SET_DOG",
  dog
});

export const setBreeds = breeds => ({
  type: "SET_BREEDS",
  breeds
});

export const getRandomDog = () => {
  return dispatch => {
    dispatch(getDog());
    dogAPI.getRandomDog().then(response => {
      dispatch(setDog({ imageURL: response.data.message }));
    });
  };
};

export const getRandomDogWithBreed = breed => {
  return dispatch => {
    dispatch(getDog());
    dogAPI.getRandomDogWithBreed(breed).then(response => {
      dispatch(
        setDog({
          imageURL: response.data.message,
          breed
        })
      );
    });
  };
};

export const getRandomDogWithBreedAndSub = (breed, subBreed) => {
  return dispatch => {
    dispatch(getDog());
    dogAPI.getRandomDogWithBreedAndSub(breed, subBreed).then(response => {
      dispatch(
        setDog({
          imageURL: response.data.message,
          breed,
          subBreed
        })
      );
    });
  };
};

export const getMasterBreeds = () => ({
  type: "GET_MASTER_BREEDS",
  payload: axios.get("https://dog.ceo/api/breeds/list")
});

export const getAllBreeds = () => {
  return dispatch => {
    dogAPI.getAllBreeds().then(response => {
      const breedDict = response.data.message;
      const masterBreeds = Object.keys(breedDict);
      const allBreeds = masterBreeds.map(name => ({
        name,
        subBreeds: breedDict[name]
      }));
      dispatch(setBreeds(allBreeds));
    });
  };
};

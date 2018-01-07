import axios from "axios";

const getRandomDog = () => axios.get("https://dog.ceo/api/breeds/image/random");

const getMasterBreeds = () => axios.get("https://dog.ceo/api/breeds/list");

const getAllBreeds = () => axios.get("https://dog.ceo/api/breeds/list/all");

const getRandomDogWithBreed = breed =>
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

const getRandomDogWithBreedAndSub = (breed, subBreed) =>
  axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);

export default {
  getRandomDog,
  getAllBreeds,
  getMasterBreeds,
  getRandomDogWithBreed,
  getRandomDogWithBreedAndSub
};

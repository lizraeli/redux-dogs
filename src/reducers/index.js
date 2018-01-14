import { combineReducers } from "redux";

import imageURL from "./imageURL";
import breeds from "./breeds";
import breedSearchText from "./breedSearchText";
import favorites from "./favorites";
import dog from "./dog";

const app = combineReducers({
  imageURL,
  breeds,
  breedSearchText,
  dog,
  favorites
});

export default app;

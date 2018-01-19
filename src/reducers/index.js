import { combineReducers } from "redux";

import imageURL from "./imageURL";
import breeds from "./breeds";
import breedSearchText from "./breedSearchText";
import favorites from "./favorites";
import dog from "./dog";
import loading from "./loading";
import error from "./error";

const app = combineReducers({
  imageURL,
  breeds,
  breedSearchText,
  dog,
  favorites,
  loading,
  error
});

export default app;

import { combineReducers } from "redux";

import imageURL from "./imageURL";
import breeds from "./breeds";
import dog from "./dog";

const app = combineReducers({
  imageURL,
  breeds,
  dog
});

export default app;

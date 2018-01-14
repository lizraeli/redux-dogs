import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import App from "./components/App";

// load favorites from localstorage
let favorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  { favorites },
  composeEnhancers(applyMiddleware(thunk))
);

// save favorites to localstorage
store.subscribe(() => {
  const newFavorites = store.getState().favorites;
  if (newFavorites.length !== favorites.length) {
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    favorites = newFavorites;
  }
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

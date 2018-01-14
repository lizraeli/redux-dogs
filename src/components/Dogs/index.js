import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  RandomDog,
  RandomDogWithBreed,
  RandomDogWithBreedAndSub,
  DogBreeds,
  Favorites
} from "../../containers/Dogs";

class App extends React.Component {
  renderRandomDogWithBreed = props => {
    const { breed } = props.match.params;
    return <RandomDogWithBreed breed={breed} />;
  };

  renderRandomDogWithBreedAndSub = props => {
    const { breed, sub } = props.match.params;
    return <RandomDogWithBreedAndSub breed={breed} subBreed={sub} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs/random" component={RandomDog} />
        <Route exact path="/dogs/breeds" component={DogBreeds} />
        <Route exact path="/dogs/favorites" component={Favorites} />

        <Route
          path="/dogs/breeds/:breed/:sub"
          render={this.renderRandomDogWithBreedAndSub}
        />
        <Route
          path="/dogs/breeds/:breed"
          render={this.renderRandomDogWithBreed}
        />
      </Switch>
    );
  }
}

export default App;

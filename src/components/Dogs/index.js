import React from "react";
import { Route, Switch } from "react-router-dom";

import { RandomDog, DogBreeds, Favorites } from "../../containers/Dogs";

class App extends React.Component {
  renderRandomDog = props => {
    const { breed, sub } = props.match.params;
    console.log("Render random dog. breed: ", breed, "subbreed: ", sub);
    return <RandomDog breed={breed} subBreed={sub} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs/breeds" component={DogBreeds} />
        <Route exact path="/dogs/favorites" component={Favorites} />
        <Route exact path="/dogs/random" component={this.renderRandomDog} />
        <Route path="/dogs/random/:breed/:sub" render={this.renderRandomDog} />
        <Route path="/dogs/random/:breed" render={this.renderRandomDog} />
      </Switch>
    );
  }
}

export default App;

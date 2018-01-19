import React from "react";

import { Segment, Header } from "semantic-ui-react";

import { capWords, capitalize } from "../../utils/";

import { connect } from "react-redux";

import {
  getRandomDog,
  getRandomDogWithBreed,
  getRandomDogWithBreedAndSub,
  addToFav,
  removeFromFav
} from "../../actions";

import Dog from "../../components/Dogs/Dog";

const mapStateToProps = state => {
  return {
    dog: state.dog,
    loading: state.loading.dog,
    error: state.error.dog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDogWithBreedAndSub: (breed, sub) => {
      dispatch(getRandomDogWithBreedAndSub(breed, sub));
    },
    getDogWithBreed: breed => {
      dispatch(getRandomDogWithBreed(breed));
    },
    getDog: () => {
      dispatch(getRandomDog());
    },
    addToFav: dog => {
      dispatch(addToFav(dog));
    },
    removeFromFav: dog => {
      dispatch(removeFromFav(dog));
    }
  };
};

class RandomDogWithBreedAndSub extends React.Component {
  getRandomDog = () => {
    const {
      breed,
      subBreed,
      getDogWithBreedAndSub,
      getDogWithBreed,
      getDog
    } = this.props;

    if (breed && subBreed) {
      getDogWithBreedAndSub(breed, subBreed);
    } else if (breed) {
      getDogWithBreed(breed);
    } else {
      getDog();
    }
  };

  componentDidMount() {
    this.getRandomDog();
  }

  toggleFav = () => {
    const { dog, addToFav, removeFromFav } = this.props;
    if (dog.isFav) {
      removeFromFav(dog.imageURL);
    } else {
      addToFav(dog);
    }
  };

  render() {
    const { breed, subBreed, dog, loading, error } = this.props;

    const title =
      subBreed && breed
        ? capWords(`${subBreed} ${breed}`)
        : breed ? capitalize(breed) : "Random Dog";

    return (
      <Segment>
        <Header as="h2" textAlign="center">
          {title}
        </Header>
        <Dog
          dog={dog}
          loading={loading}
          error={error}
          onClick={this.getRandomDog}
          toggleFav={this.toggleFav}
        />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(
  RandomDogWithBreedAndSub
);

export default ConnectedDog;

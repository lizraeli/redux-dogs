import React from "react";

import { Segment, Header } from "semantic-ui-react";

import { capWords } from "../../utils/";

import { connect } from "react-redux";

import {
  getRandomDogWithBreedAndSub,
  addToFav,
  removeFromFav
} from "../../actions";

import Dog from "../../components/Dogs/Dog";

const mapStateToProps = state => {
  return {
    dog: state.dog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDogWithBreedAndSub: (breed, sub) => {
      dispatch(getRandomDogWithBreedAndSub(breed, sub));
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
    const { breed, subBreed, getDogWithBreedAndSub } = this.props;
    getDogWithBreedAndSub(breed, subBreed);
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
    const { breed, subBreed, dog } = this.props;

    return (
      <Segment>
        <Header as="h2" textAlign="center">
          {capWords(`${subBreed} ${breed}`)}
        </Header>
        <Dog dog={dog} onClick={this.getRandomDog} toggleFav={this.toggleFav} />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(
  RandomDogWithBreedAndSub
);

export default ConnectedDog;

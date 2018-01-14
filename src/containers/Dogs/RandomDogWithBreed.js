import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { capitalize } from "../../utils";
import { connect } from "react-redux";

import { getRandomDogWithBreed, addToFav, removeFromFav } from "../../actions";
import Dog from "../../components/Dogs/Dog";

const mapStateToProps = state => {
  return {
    dog: state.dog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDogWithBreed: breed => {
      dispatch(getRandomDogWithBreed(breed));
    },
    addToFav: dog => {
      dispatch(addToFav(dog));
    },
    removeFromFav: dog => {
      dispatch(removeFromFav(dog));
    }
  };
};

class RandomDogWithBreed extends React.Component {
  getRandomDog = () => {
    const { breed, getDogWithBreed } = this.props;
    getDogWithBreed(breed);
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
    const { breed, dog } = this.props;

    return (
      <Segment>
        <Header as="h2" textAlign="center">
          {capitalize(breed)}
        </Header>
        <Dog
          title={capitalize(breed)}
          dog={dog}
          onClick={this.getRandomDog}
          toggleFav={this.toggleFav}
        />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(
  RandomDogWithBreed
);

export default ConnectedDog;

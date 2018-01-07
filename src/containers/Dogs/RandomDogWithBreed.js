import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { capitalize } from "../../utils";
import { connect } from "react-redux";

import { getRandomDogWithBreed } from "../../actions";
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

  render() {
    const { breed, dog } = this.props;
    const { imageURL } = dog;

    return (
      <Segment>
        <Header as="h2" textAlign="center">
          {capitalize(breed)}
        </Header>
        <Dog imageURL={imageURL} onClick={this.getRandomDog} />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(
  RandomDogWithBreed
);

export default ConnectedDog;

import React from "react";

import { Segment, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { capWords } from "../../utils/";

import { connect } from "react-redux";

import { getRandomDogWithBreedAndSub } from "../../actions";
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

  render() {
    const { breed, subBreed, dog } = this.props;
    const { imageURL } = dog;

    return (
      <Segment>
        <Segment basic>
          <Button floated="left">
            <Link to="/dogs/breeds">
              <Icon name="arrow left" size="small" />
            </Link>{" "}
          </Button>
        </Segment>
        <Header as="h2" textAlign="center">
          {capWords(`${subBreed} ${breed}`)}
        </Header>
        <Dog imageURL={imageURL} onClick={this.getRandomDog} />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(
  RandomDogWithBreedAndSub
);

export default ConnectedDog;

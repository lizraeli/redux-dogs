import React from "react";
import { Header, Segment } from "semantic-ui-react";

import { connect } from "react-redux";

import Dog from "../../components/Dogs/Dog";
import { FetchButton, ToggleFavButton } from "../../components/Buttons";

import { getRandomDog, addToFav, removeFromFav } from "../../actions";

const mapStateToProps = state => {
  return {
    dog: state.dog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewDog: () => {
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

class RandomDog extends React.Component {
  getRandomDog = () => {
    const { getNewDog } = this.props;
    getNewDog();
  };

  componentDidMount() {
    this.getRandomDog();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.dog.imageURL === this.props.dog.imageURL) {
    //   this.getRandomDog();
    // }
  }

  toggleFav = () => {
    const { dog, addToFav, removeFromFav } = this.props;
    if (dog.isFav) {
      removeFromFav(dog);
    } else {
      addToFav(dog);
    }
  };

  render() {
    const { dog } = this.props;
    return (
      <Segment>
        <Header as="h2" textAlign="center">
          Random Dog Picture
        </Header>
        <Segment />
        <Segment>
          <Dog
            dog={dog}
            onClick={this.getRandomDog}
            toggleFav={this.toggleFav}
          />
          <Segment basic clearing>
            <ToggleFavButton isFav={dog.isFav} toggleFav={this.toggleFav} />
            <FetchButton onClick={this.getRandomDog} />
          </Segment>
        </Segment>
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(RandomDog);

export default ConnectedDog;

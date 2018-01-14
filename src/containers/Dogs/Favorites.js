import React from "react";
import { Header, Segment } from "semantic-ui-react";

import { connect } from "react-redux";

import Favorites from "../../components/Dogs/Favorites";

import { removeFromFav } from "../../actions";

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromFav: dog => {
      dispatch(removeFromFav(dog));
    }
  };
};

class RandomDog extends React.Component {
  componentWillReceiveProps(nextProps) {
    // if (nextProps.dog.imageURL === this.props.dog.imageURL) {
    //   this.getRandomDog();
    // }
  }

  removeFromFav = imageURL => {
    const { removeFromFav } = this.props;
    removeFromFav(imageURL);
  };

  render() {
    const { favorites } = this.props;
    return (
      <Segment>
        <Header as="h2" textAlign="center">
          Favorites
        </Header>
        <Favorites favorites={favorites} removeFromFav={this.removeFromFav} />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(RandomDog);

export default ConnectedDog;

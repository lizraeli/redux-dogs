import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import Dog from "../../components/Dogs/Dog";

import { getRandomDog } from "../../actions";

const mapStateToProps = state => {
  return {
    dog: state.dog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewDog: () => {
      dispatch(getRandomDog());
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
    if (nextProps.dog.imageURL === this.props.dog.imageURL) {
      this.getRandomDog();
    }
  }

  render() {
    const { imageURL } = this.props.dog;
    return (
      <Segment>
        <Header as="h2" textAlign="center">
          Random Dog Picture
        </Header>
        <Dog imageURL={imageURL} onClick={this.getRandomDog} />
      </Segment>
    );
  }
}

const ConnectedDog = connect(mapStateToProps, mapDispatchToProps)(RandomDog);

export default ConnectedDog;

import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import DogBreedList from "../../components/Dogs/DogBreedList";
import { getAllBreeds } from "../../actions";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";

const mapStateToProps = state => {
  return {
    breeds: state.breeds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBreeds: breeds => {
      dispatch(getAllBreeds());
    }
  };
};

class DogBreeds extends React.Component {
  getDogBreeds = () => {
    console.log("get breeds");
    const { getBreeds } = this.props;
    getBreeds();
  };

  componentDidMount() {
    if (this.props.breeds.length === 0) {
      this.getDogBreeds();
    }
  }

  render() {
    const { breeds } = this.props;
    return (
      <Segment>
        <Header as="h2" textAlign="center">
          All Breeds
        </Header>
        <DogBreedList breeds={breeds} />
      </Segment>
    );
  }
}

const ConnectedBreeds = connect(mapStateToProps, mapDispatchToProps)(DogBreeds);

export default ConnectedBreeds;

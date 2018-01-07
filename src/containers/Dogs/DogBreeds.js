import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import DogBreedList from "../../components/Dogs/DogBreedList";
import { getAllBreeds } from "../../actions";

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
    const { getBreeds } = this.props;
    getBreeds();
  };

  componentDidMount() {
    this.getDogBreeds();
  }

  render() {
    const { breeds } = this.props;
    console.log("dogbreeds props", this.props);
    return (
      <Segment>
        <h2> All Breeds </h2>
        <DogBreedList breeds={breeds} />
      </Segment>
    );
  }
}

const ConnectedBreeds = connect(mapStateToProps, mapDispatchToProps)(DogBreeds);

export default ConnectedBreeds;

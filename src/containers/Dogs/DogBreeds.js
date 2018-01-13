import React from "react";
import { Segment, Input, Loader } from "semantic-ui-react";
import { connect } from "react-redux";

import DogBreedList from "../../components/Dogs/DogBreedList";
import { getAllBreeds, setBreedSearchText } from "../../actions";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";

const mapStateToProps = state => {
  return {
    breeds: state.breeds,
    breedSearchText: state.breedSearchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBreeds: breeds => {
      dispatch(getAllBreeds());
    },
    setBreedSearchText: text => {
      dispatch(setBreedSearchText(text));
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
    const { breeds } = this.props;
    if (breeds.breedList.length === 0) {
      this.getDogBreeds();
    }
  }

  someSubBreed = (subBreeds, searchText) => {
    return subBreeds.some(subBreed =>
      subBreed.toLowerCase().includes(searchText)
    );
  };

  filterBreeds = (breeds, searchText) => {
    const text = searchText.toLowerCase();
    return breeds.filter(
      breed =>
        breed.name.toLowerCase().includes(text) ||
        (breed.subBreeds && this.someSubBreed(breed.subBreeds, text))
    );
  };
  render() {
    const { breeds, breedSearchText, setBreedSearchText } = this.props;
    const { breedList, error } = breeds;

    console.log(breeds);
    if (error) {
      return (
        <Segment>
          <Header as="h2" textAlign="center">
            All Breeds
          </Header>
          <Segment>Error Fetching Breeds: {error}</Segment>
        </Segment>
      );
    }

    const filteredBreeds = this.filterBreeds(breedList, breedSearchText);

    return (
      <Segment>
        <Header as="h2" textAlign="center">
          All Breeds
        </Header>
        <Input
          label="search"
          onChange={e => setBreedSearchText(e.target.value)}
          value={breedSearchText}
        />

        {breedList.length === 0 ? (
          <Segment basic style={{ paddingTop: "10em" }}>
            <Loader active> Fetching Dog Breeds </Loader>
          </Segment>
        ) : (
          <DogBreedList breeds={filteredBreeds} searchText={breedSearchText} />
        )}
      </Segment>
    );
  }
}

const ConnectedBreeds = connect(mapStateToProps, mapDispatchToProps)(DogBreeds);

export default ConnectedBreeds;

import React from "react";
import { Link } from "react-router-dom";
import { List, Item, Segment, Transition } from "semantic-ui-react";
import styled from "styled-components";

import { capitalize } from "../../utils";

const Name = styled(Item)`
  padding-top: 1.2em;
  font-size: 1.4em;
`;

const PaddedLink = styled(Link)`
  padding-top: 2em;
`;

const FilteredSubBreedList = ({ breedName, subBreeds, searchText }) => (
  <List selection verticalAlign="bottom">
    {subBreeds.map(
      subName =>
        subName.includes(searchText) ? (
          <List.Item key={subName}>
            <Link to={`/dogs/breeds/${breedName}/${subName}`}>
              <Name>{capitalize(subName)}</Name>
            </Link>
          </List.Item>
        ) : (
          ""
        )
    )}
  </List>
);

const SubBreedList = ({ breedName, subBreeds }) => (
  <List selection verticalAlign="bottom">
    {subBreeds.map(subName => (
      <List.Item key={subName}>
        <Link to={`/dogs/breeds/${breedName}/${subName}`}>
          <Name>{capitalize(subName)}</Name>
        </Link>
      </List.Item>
    ))}
  </List>
);
const DogBreedList = ({ breeds, searchText }) => (
  <Transition.Group
    duration={1000}
    animation="fade down"
    as={List}
    celled
    selection
    verticalAlign="bottom"
  >
    {breeds.length === 0 ? (
      <Segment basic>Breed Not Found...</Segment>
    ) : (
      breeds.map(breed => {
        const { name, subBreeds } = breed;
        return (
          <List.Item key={name}>
            <PaddedLink to={`/dogs/breeds/${name}`}>
              <Name>{capitalize(name)}</Name>
            </PaddedLink>

            {subBreeds.length && searchText ? (
              <FilteredSubBreedList
                breedName={name}
                subBreeds={subBreeds}
                searchText={searchText}
              />
            ) : subBreeds.length ? (
              <SubBreedList
                breedName={name}
                subBreeds={subBreeds}
                searchText={searchText}
              />
            ) : (
              ""
            )}
          </List.Item>
        );
      })
    )}
  </Transition.Group>
);

export default DogBreedList;
//    <List celled selection relaxed="very" verticalAlign="bottom">
//    </List>

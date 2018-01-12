import React from "react";
import { Link } from "react-router-dom";
import { List, Item, Loader, Segment, Transition } from "semantic-ui-react";
import styled from "styled-components";

import { capitalize } from "../../utils";

const LargeItem = styled(Item)`
  font-size: 1.2em;
`;

const ExtraLargeItem = styled(Item)`
  font-size: 1.4em;
  font-weight: 900;
`;

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
            <br />
            <Link to={`/dogs/breeds/${name}`}>
              <LargeItem>{capitalize(name)} </LargeItem>
            </Link>

            {subBreeds.length ? (
              <List selection verticalAlign="bottom">
                {subBreeds.map(subName => (
                  <List.Item key={subName}>
                    <Link to={`/dogs/breeds/${name}/${subName}`}>
                      {searchText && subName.includes(searchText) ? (
                        <ExtraLargeItem>{capitalize(subName)}</ExtraLargeItem>
                      ) : (
                        <LargeItem>{capitalize(subName)}</LargeItem>
                      )}
                    </Link>
                  </List.Item>
                ))}
              </List>
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

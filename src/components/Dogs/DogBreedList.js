import React from "react";
import { Link } from "react-router-dom";
import { List, Item, Loader, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { capitalize } from "../../utils";

const LargeItem = styled(Item)`
  font-size: 1.2em;
`;

const DogBreedList = ({ breeds }) => (
  <List celled selection relaxed="very" verticalAlign="bottom">
    {breeds.length === 0 ? (
      <Segment basic>
        Breed Not Found...
      </Segment>
    ) : (
      breeds.map(breed => {
        const { name, subBreeds } = breed;
        return (
          <List.Item key={name}>
            <Link to={`/dogs/breeds/${name}`}>
              <LargeItem>{capitalize(name)} </LargeItem>
            </Link>

            {subBreeds.length ? (
              <List selection verticalAlign="bottom">
                {subBreeds.map(subName => (
                  <List.Item key={subName}>
                    <Link to={`/dogs/breeds/${name}/${subName}`}>
                      <LargeItem>{capitalize(subName)}</LargeItem>
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
  </List>
);

export default DogBreedList;

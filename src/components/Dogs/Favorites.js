import React from "react";
import { Button, Segment, Loader, Image } from "semantic-ui-react";
import styled from "styled-components";

const DogSegment = styled(Segment)`
  @media (max-width: 768px) {
    height: 18em;
  }

  @media (min-width: 768px) {
    padding: 0.2em;
    height: 24em;
  }

  background-color: #fafafa !important;

  img {
    height: 100%;
  }
`;

const DogImage = ({ imageURL }) =>
  imageURL ? (
    <Image alt="" centered rounded bordered src={imageURL} />
  ) : (
    <Loader active> Fetching Dog... </Loader>
  );

const Dog = ({ dog }) => {
  const { imageURL, error } = dog;
  return (
    <DogSegment basic>
      {error ? (
        `Error Fetching Dog: ${error} `
      ) : (
        <DogImage imageURL={imageURL} />
      )}
    </DogSegment>
  );
};

const Favorites = ({ favorites, removeFromFav }) =>
  favorites.map(dog => (
    <Segment key={dog.imageURL}>
      <Dog dog={dog} />
      <Segment basic clearing>
        <Button floated="left" onClick={() => removeFromFav(dog.imageURL)}>
          Remove from favorites
        </Button>
      </Segment>
    </Segment>
  ));

export default Favorites;

import React from "react";
import {
  Button,
  Segment,
  Loader,
  Image,
  Responsive,
  Divider,
  Icon
} from "semantic-ui-react";
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

const ToggleFavButton = ({ isFav, toggleFav, isLoading, ...props }) => (
  <Button disabled={isLoading} floated="left" onClick={toggleFav} {...props}>
    <Icon name="favorite" />
    {isFav ? "Remove from favorites" : "Add to favorites"}
  </Button>
);

const FetchButton = ({ onClick, isLoading, ...props }) => (
  <Button disabled={isLoading} floated="right" onClick={onClick} {...props}>
    Another One
  </Button>
);

const Dog = ({ dog, onClick, toggleFav }) => {
  const { imageURL, error, isFav } = dog;
  return (
    <Segment>
      <DogSegment basic>
        {error ? (
          `Error Fetching Dog: ${error} `
        ) : (
          <DogImage imageURL={imageURL} />
        )}
      </DogSegment>
      <Responsive minWidth={768} as={Segment} basic clearing>
        <ToggleFavButton
          isFav={isFav}
          toggleFav={toggleFav}
          isLoading={!imageURL}
          size="large"
        />
        <FetchButton onClick={onClick} isLoading={!imageURL} size="large" />
      </Responsive>

      <Responsive maxWidth={768} as={Segment} basic clearing>
        <Button.Group vertical fluid size="large">
          <ToggleFavButton
            isFav={isFav}
            toggleFav={toggleFav}
            isLoading={!imageURL}
            color="grey"
          />

          <FetchButton onClick={onClick} isLoading={!imageURL} />
        </Button.Group>
      </Responsive>
    </Segment>
  );
};

export default Dog;

import React from "react";
import { Button, Segment, Loader, Image } from "semantic-ui-react";
import styled from "styled-components";

const DogSegment = styled(Segment)`
  @media (max-width: 768px) {
    height: 14em;
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
    <Loader active> Loading... </Loader>
  );

const FetchButton = ({ onClick }) => (
  <Segment basic clearing>
    <Button floated="right" onClick={onClick}>
      Another One
    </Button>
  </Segment>
);

const Dog = ({ imageURL, onClick }) => (
  <Segment>
    <DogSegment basic>
      <DogImage imageURL={imageURL} />
    </DogSegment>
    <FetchButton onClick={onClick} />
  </Segment>
);

export default Dog;

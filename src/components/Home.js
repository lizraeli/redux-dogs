import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Home = () => (
  <Segment>
    <Header as="h1"> Dog Pictures </Header>
    Click on Random Dog to see a random dog picture or on Dog Breeds to see a
    random picture by breed.
  </Segment>
);

export default Home;

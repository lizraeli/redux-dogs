import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Home = () => (
  <Segment>
    <Header textAlign="center" as="h1">
      Dog Pictures
    </Header>
    <Segment basic style={{ fontSize: "1.2em" }}>
      Click or tap on <strong>Random</strong> to see a random dog picture. Click
      or tap on <strong> Dog Breeds </strong> to see random dog pictures by
      breed. The source code for this site is available{" "}
      <a href="https://github.com/lizraeli/redux_dogs"> on github </a>.
    </Segment>
  </Segment>
);

export default Home;

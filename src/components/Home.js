import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Home = () => (
  <Segment>
    <Header textAlign="center" as="h1">
      Dog Pictures
    </Header>
    <Segment basic style={{ fontSize: "1.4em" }}>
      Dog pictures powered by the <a href="https://dog.ceo/dog-api/">Dog API</a>.
      Click or tap on <strong>Random</strong> to see a random dog picture. Click
      or tap on <strong> Dog Breeds </strong> to see a random dog picture by
      breed or sub-breed. The source code for this site is available{" "}
      <a href="https://github.com/lizraeli/redux-dogs"> on github </a>.
    </Segment>
  </Segment>
);

export default Home;

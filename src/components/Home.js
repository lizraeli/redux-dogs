import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Home = () => (
  <Segment>
    <Header textAlign="center" as="h1">
      Dog Pictures
    </Header>
    <Segment basic style={{ fontSize: "1.2em" }}>
      This site is built with react and redux. You may view the source code{" "}
      <a href=""> here </a>
    </Segment>
  </Segment>
);

export default Home;

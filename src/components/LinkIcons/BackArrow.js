import React from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BackArrow = ({ path }) => (
  <Segment basic>
    <Button floated="left">
      <Link to="/dogs/breeds">
        <Icon name="arrow left" size="small" />
      </Link>
    </Button>
  </Segment>
);

export default BackArrow;

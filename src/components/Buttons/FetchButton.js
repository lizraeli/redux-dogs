import React from "react";
import { Button } from "semantic-ui-react";

const FetchButton = ({ onClick }) => (
  <Button floated="right" onClick={onClick}>
    Another One
  </Button>
);

export default FetchButton;

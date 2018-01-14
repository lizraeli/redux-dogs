import React from "react";
import { Button } from "semantic-ui-react";

const ToggleFavButton = ({ isFav, toggleFav }) => (
  <Button floated="left" onClick={toggleFav}>
    {isFav ? "Remove from favorites" : "Add to favorites"}
  </Button>
);

export default ToggleFavButton;

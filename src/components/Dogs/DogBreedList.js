import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const DogBreedList = ({ breeds }) => (
  <List>
    {breeds.map(breed => {
      const { name, subBreeds } = breed;
      return (
        <List.Item key={name}>
          <Link to={`/dogs/breeds/${name}`}>
            {name[0].toUpperCase() + name.slice(1)}{" "}
          </Link>
          {subBreeds.length > 0 ? (
            <List>
              {subBreeds.map(subName => (
                <List.Item key={subName}>
                  <Link to={`/dogs/breeds/${name}/${subName}`}>{subName} </Link>
                </List.Item>
              ))}
            </List>
          ) : (
            ""
          )}
        </List.Item>
      );
    })}
  </List>
);

export default DogBreedList;

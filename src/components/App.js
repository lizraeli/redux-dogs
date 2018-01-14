import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dogs from "./Dogs/";
import { Responsive, Container, Menu } from "semantic-ui-react";

const NavMenu = props => (
  <Menu {...props}>
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dogs/breeds">Dog Breeds</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dogs/random">Random</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dogs/favorites">Favorites</Link>
    </Menu.Item>
  </Menu>
);

const App = () => (
  <div>
    <Container text>
      <Responsive maxWidth={768}>
        <NavMenu fluid widths={4} />
      </Responsive>

      <Responsive minWidth={768}>
        <NavMenu size="massive" />
      </Responsive>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dogs" component={Dogs} />
      </Switch>
    </Container>
  </div>
);

export default App;

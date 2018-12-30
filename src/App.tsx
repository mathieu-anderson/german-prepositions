import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Header, RouterLink } from "./StyledComponents";

import prepositionsData, {
  dativeList,
  accusativeList,
  twoWayList
} from "./prepositionsData";
import Landing from "./Landing";
import DativePage from "./DativePage";
import AccusativePage from "./AccusativePage";
import TwoWayPage from "./TwoWayPage";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Courier', sans-serif;
    color: black;
    margin: 1em;
  }
`;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <GlobalStyles />
          <Header link>
            <RouterLink to="/">German prepositions</RouterLink>
          </Header>
          <Route
            exact
            path="/"
            render={props => <Landing {...props} list={prepositionsData} />}
          />
          <Route
            exact
            path="/dative"
            render={props => <DativePage {...props} list={dativeList} />}
          />
          <Route
            exact
            path="/accusative"
            render={props => (
              <AccusativePage {...props} list={accusativeList} />
            )}
          />
          <Route
            exact
            path="/two-way"
            render={props => <TwoWayPage {...props} list={twoWayList} />}
          />
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;

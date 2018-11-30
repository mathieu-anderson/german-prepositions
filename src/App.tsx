import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import prepositionsList, {
  dativeList,
  accusativeList,
  twoWayList
} from './prepositionsList';
import PrepositionsPage from './PrepositionsPage';
import DativePage from './DativePage';
import AccusativePage from './AccusativePage';
import TwoWayPage from './TwoWayPage';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <header>
              <StyledLink to='/'>
                German prepositions
              </StyledLink>
            </header>
          <Route
            exact
            path="/"
            render={props => <PrepositionsPage {...props} list={prepositionsList} />}
          />
          <Route
            exact
            path="/dative"
            render={props => <DativePage {...props} list={dativeList}/>}
          />
          <Route
            exact
            path="/accusative"
            render={props => <AccusativePage {...props} list={accusativeList}/>}
          />
          <Route
            exact
            path="/two-way"
            render={props => <TwoWayPage {...props} list={twoWayList}/>}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

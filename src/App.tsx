import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import prepositionsList, {
  dativeList,
  accusativeList,
  twoWayList
} from './prepositionsList';
import PrepositionsPage from './PrepositionsPage';
import DativePage from './DativePage';
import AccusativePage from './AccusativePage';
import TwoWayPage from './TwoWayPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Link to='/'>
            <header>
              <h1>
                German prepositions
              </h1>
            </header>
          </Link>
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

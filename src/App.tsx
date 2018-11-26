import React, { Component } from 'react';
import PrepositionsPage from './PrepositionsPage'
import prepositionsList from './prepositionsList'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            German prepositions
          </h1>
        </header>
        <PrepositionsPage list={prepositionsList} />
      </div>
    );
  }
}

export default App;

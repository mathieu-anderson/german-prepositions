import React, { Component } from 'react';
import Prepositions from './Prepositions'

import { accusative, dative } from './prepositionsDefinitions';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            German prepositions
          </h1>
        </header>
        <Prepositions accusative={accusative} dative={dative} />
      </div>
    );
  }
}

export default App;

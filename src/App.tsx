import React, { Component } from 'react';
import Prepositions from './Prepositions'

import definitions from './prepositionsDefinitions';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            German prepositions
          </h1>
        </header>
        <Prepositions definitions={definitions} />
      </div>
    );
  }
}

export default App;

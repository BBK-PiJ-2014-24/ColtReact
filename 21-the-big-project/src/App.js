import React, { Component } from 'react';
import Palette from './Palette/Palette.component';
import seedColors from './seedColors.js';
import {generatePalette} from './colourHelpers';

class App extends Component {
  render(){
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette  palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;

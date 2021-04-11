import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import PaletteList from './PaletteList/PaletteList.component';
import Palette from './Palette/Palette.component';
import seedColors from './seedColors.js';
import {generatePalette} from './colourHelpers';

class App extends Component {

  findPalette(id){
    return seedColors.find((palette) => {
      return palette.id === id;
    } );
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' 
                       render={()=> <PaletteList  palettes={seedColors} />} />
          <Route exact path='/palette/:id' 
                       render={ routeProps => (
                         <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                       )}
          />
        </Switch>
        {/* <div>
          <Palette  palette={generatePalette(seedColors[4])} />
        </div> */}
      </div>
    );
  }
}

export default App;

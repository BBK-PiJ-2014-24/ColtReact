import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import PaletteList from './PaletteList/PaletteList.component';
import Palette from './Palette/Palette.component';
import seedColors from './seedColors.js';
import {generatePalette} from './colourHelpers';
import SingleColorPalette from './SingleColorPalette/SingleColorPalette.component';
import NewPaletteForm from './NewPaletteForm/NewPaletteForm.component';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      palettes: seedColors,
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id){
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    } );
  }

  savePalette(newPalette){
    console.log(newPalette);
    this.setState({
      palettes: [...this.state.palettes, newPalette],
    });
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/palette/new' render={(routeProps)=> <NewPaletteForm savePalette={this.savePalette} 
                                                                    palettes={this.state.palettes} 
                                                                    {...routeProps}/> } />
          <Route exact path='/' 
                       render={(routeProps)=> <PaletteList  palettes={this.state.palettes} {...routeProps} />} />
          <Route exact path='/palette/:id' 
                       render={ routeProps => (
                         <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                       )}
          />
          <Route exact path='/palette/:paletteId/:colorId' 
                       render={(routeProps) => (
                            <SingleColorPalette 
                              colorId={routeProps.match.params.colorId}
                              palette={generatePalette(
                                this.findPalette(routeProps.match.params.paletteId)
                                )}
                            />
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

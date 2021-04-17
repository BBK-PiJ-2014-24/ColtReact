import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox.component';

class SingleColorPalette extends Component {

    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    // return all shades of given color
    gatherShades(palette, colorToFilter){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter( c => c.id === colorToFilter)
            );
        }
        return shades.slice(1); // ignore first color, which is white
    }

    render(){
         const colorBoxes = this._shades.map(c => (
                <ColorBox key={c.id}
                          name={c.name}
                          background={c.hex}
                          showLink={false}
                />

             ));
        return (
            <div className='Palette'>
                <h1>Single Color Palette!!</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        );
    }

}

export default SingleColorPalette;

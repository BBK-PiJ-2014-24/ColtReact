import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ColorBox from '../ColorBox/ColorBox.component';
import NavBar from '../NavBar/NavBar.component';
import PaletteFooter from '../PaletteFooter/PaletteFooter.component';

class SingleColorPalette extends Component {

    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: 'hex'
        }
        this.changeFormat = this.changeFormat.bind(this);
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

    changeFormat(val){
        this.setState({format: val});
    }

    render(){
         const colorBoxes = this._shades.map(c => (
                <ColorBox key={c.name}
                          name={c.name}
                          background={c[this.state.format]}
                          showFullPalette={false}
                />
             ));
        return (
            <div className='SingleColorPalette Palette'>
                <NavBar handleChange={this.changeFormat} 
                        showSlider={false}
                />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                       <Link to={`/palette/${this.props.palette.id}`} className='back-button'>Go Back</Link> 
                    </div>
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName}
                               emoji={this.props.palette.emoji}
                />
            </div>
        );
    }

}

export default SingleColorPalette;

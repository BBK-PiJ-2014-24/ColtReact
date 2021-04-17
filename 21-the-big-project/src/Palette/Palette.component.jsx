import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox.component';
import NavBar from '../NavBar/NavBar.component';

import '../Palette/Palette.css';


class Palette extends Component {

    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }
    
    changeFormat(val){
        this.setState({format: val});
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map((c) => (
            <ColorBox background={c[this.state.format]} 
                      name={c.name}
                      key={c.id}
                      id={c.id}
                      paletteId={this.props.palette.id}
                      showLink={true}
                     />
        ));
        return (
            <div className='Palette'>
                <NavBar level={this.state.level}  
                        changeLevel={this.changeLevel}
                        handleChange={this.changeFormat}    
                        />
                {/* NavBar */}
                <div className='Palette-colors'>
                    {/* Color Boxes */}
                    {colorBoxes}
                </div>
                {/* Footer */}
                <footer className='Palette-footer'>
                    {this.props.palette.paletteName}
                    <span className='emoji'>{this.props.palette.emoji}</span>
                </footer>
            </div>
        );
    }

}

export default Palette;
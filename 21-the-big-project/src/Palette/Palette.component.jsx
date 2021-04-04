import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox.component';
import NavBar from '../NavBar/NavBar.component';

import '../Palette/Palette.css';


class Palette extends Component {

    constructor(props){
        super(props);
        this.state = {
            level: 500,
        };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map((c) => (
            <ColorBox background={c.hex} name={c.name} />
        ));
        return (
            <div className='Palette'>
                <NavBar level={this.state.level}  changeLevel={this.changeLevel}/>
                {/* NavBar */}
                <div className='Palette-colors'>
                    {/* Color Boxes */}
                    {colorBoxes}
                </div>
                {/* Footer */}
            </div>
        );
    }

}

export default Palette;
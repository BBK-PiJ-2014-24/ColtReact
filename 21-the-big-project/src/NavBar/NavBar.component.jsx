import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';
import '../NavBar/NavBar.css';


class NavBar extends Component {



    render(){
        return (
        <header className='NavBar'>
            <div className='logo'>
                <a href='#'>Palettes</a>
            </div>
            <div className='slider-container'>
                <span>Level: {this.props.level}</span>
                <div className='slider'>
                    <Slider defaultValue={this.props.level} 
                            min={100} max={900} step={100}
                            onAfterChange={this.props.changeLevel}    
                    />
                </div>
            </div>
        </header>

        );
    }
}

export default NavBar;
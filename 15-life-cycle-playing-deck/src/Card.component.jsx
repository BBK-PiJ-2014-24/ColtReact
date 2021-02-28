import React, { Component } from 'react';
import './Card.css';

class Card extends Component {


    constructor(props){
        super(props);
        let angle = (Math.random() * 90) - 45;
        let translateX = (Math.random()*40) -20;
        let translateY = (Math.random()*40) -20;
        this._transform = `translate(${translateX}px, ${translateY}px) rotate(${angle}deg)`;
    }
    render(){
        return (
            <img className='Card'  
                 src={this.props.image} 
                 alt={this.props.name}
                 style={{transform: this._transform}}
            />
        );
    }
}

export default Card;
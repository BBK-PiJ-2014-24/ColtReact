import React, { Component } from 'react';
import './dice.css';

class Dice extends Component {

    constructor(props){
        super(props);
        this.state = {
            num:1,
        }
    }

    render() {
        const {face, rolling} = this.props;
        return(
                <i className={`dice fas fa-dice-${face} ${rolling && 'dice-wobble' }`}></i>
        )
    }

} 

export default Dice;

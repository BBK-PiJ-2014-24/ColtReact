import React, { Component } from 'react';
import Dice from '../dice/Dice.component';
import './RollDice.css';

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state={
            dice1: 'one',
            dice2: 'two',
            isRolling: false,
        };
        this.roll = this.roll.bind(this);
    }

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six'],
    }

    roll(){
        const newDice1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const newDice2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        this.setState({dice1: newDice1, dice2: newDice2, isRolling:true});
        setTimeout(()=>{
            this.setState({isRolling: false});
        },1000);
    }

    render(){
    return(    
        <div className='RollDice'>
            <div className='RollDice-container'>
                <Dice face={this.state.dice1} rolling={this.state.isRolling} />
                <Dice face={this.state.dice2} rolling={this.state.isRolling} />
            </div>
            <button onClick={this.roll} disabled={this.state.isRolling}>
            {this.state.isRolling ? "Rolling..." : "Roll Dice"}
            </button>
        </div>
    )
    }
}
export default RollDice;
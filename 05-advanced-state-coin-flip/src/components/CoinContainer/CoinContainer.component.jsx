import React, { Component } from 'react';
import {choice} from './helpers';
import Coin from '../Coin/Coin.component';

class CoinContainer extends Component {
    static defaultProps = {
        coins:[
           {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
           {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    };

    constructor(props){
        super(props);
        this.state={
            currentCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState((prevState)=>{
            return {
                currentCoin: newCoin,
                numFlips: prevState.numFlips + 1,
                numHeads: prevState.numHeads + (newCoin.side === 'heads' ? 1 : 0),
                numTails: prevState.numTails + (newCoin.side === 'tails' ? 1 : 0),
            };
            
        });
    }

    handleClick(e){
        this.flipCoin();
    }


    render(){
        return(
            <div className='CoinContainer'>
                <h2>Flip The Coin</h2>
                {this.state.currentCoin && <Coin infoObj={this.state.currentCoin}  />}
                <button onClick={this.handleClick}>Flip</button>
                <p>Number of Flips: {this.state.numFlips}, Number of Heads: {this.state.numHeads}, Number of Tails: {this.state.numTails}</p>
            </div>
        )
    }

}

export default CoinContainer;
import React, { Component } from 'react'
import './Coin.css';

class Coin extends Component {


    render() {
        const {imgSrc, side} = this.props.infoObj;
         return (
             <div className='Coin'>
                <img src={imgSrc} alt={side} />
            </div>
         );
    }

}

export default Coin;
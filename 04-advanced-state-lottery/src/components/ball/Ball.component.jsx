import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {



    render() {
        const {ballNum} = this.props;
        return (
            <div className='Ball'>
                {ballNum}
            </div>
        );
    }
}
 export default Ball;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from '../Message/Message.component';
import './Chips.css';
import chippie from './Chips.png';

class Chips extends Component {

    render(){
        return(
            <div className='Chips'>
                <Message>
                    <h1>Chips</h1>
                    <Link to='/'>Go Back</Link>
                </Message>
                <div>
                    <img src={chippie} alt="crisps"/>
                </div>
            </div>);
        }
}

export default Chips;
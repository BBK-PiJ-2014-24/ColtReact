import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from '../Message/Message.component';
import sodaImg from './Soda.png';
import './Soda.css';

class Soda extends Component {


    render(){
        return(
            <div className='Soda'>
                <Message>
                    <h1>Soda</h1>
                    <Link to='/'>Go Back</Link>
                </Message>
                <div>
                    <img src={sodaImg} alt="coke can"/>
                </div>
            </div>);
        }
}

export default Soda;
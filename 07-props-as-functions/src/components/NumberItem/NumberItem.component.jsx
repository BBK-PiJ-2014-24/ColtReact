import React, { Component } from 'react';
import './NumberItem.css'

class NumberItem extends Component {

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
        this.props.remove(this.props.value);
    }

    render() {
        return (
            <div className='NumberItem'>
                <li>
                    <h1>{this.props.value}</h1>
                    <button onClick={this.handleRemove}>XX</button>
                </li>
            </div>
        )
    }
}

export default NumberItem;
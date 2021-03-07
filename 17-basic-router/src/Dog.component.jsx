import React, { Component } from 'react';

class Dog extends Component {


    render(){
        return(
            <div className='Dog'>
                <h1>Dog!!</h1>
                <h3> Dog Name: {this.props.name}</h3>
                <img src="https://images.unsplash.com/photo-1574850715183-730d97e1d99c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </div>
        );
    }

}

export default Dog;
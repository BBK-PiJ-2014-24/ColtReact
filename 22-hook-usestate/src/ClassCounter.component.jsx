import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);

    }

    render(){
        return(
            <div>
                <h1>The Count is: {this.state.count}</h1>
                <button onClick={this.increment}> Add +1</button>
            </div>

        );
    }

}
export default ClassCounter;
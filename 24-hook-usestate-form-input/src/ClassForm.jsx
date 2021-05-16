import React, { Component } from 'react';

class ClassForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            email: e.target.value,
        });
    }

    render(){
        return (
            <div>
                <h1>Echo Class Email: {this.state.email}</h1>
                <input type="text" 
                       value={this.state.email}
                       onChange={this.handleChange}
                />
            </div>
        );
    }


}

export default ClassForm;
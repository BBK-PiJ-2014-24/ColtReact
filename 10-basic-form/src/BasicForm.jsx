import React, { Component } from 'react';

class BasicForm extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName: "",    
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({fullName: e.target.value});
    }

    handleSubmit(){
        alert(`Full Name: ${this.state.fullName}`);
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input name='fullName' type="text" value={this.state.fullName} onChange={this.handleChange} />
                <button> Add Name </button>
            </form>        
        )
    }

}

export default BasicForm;
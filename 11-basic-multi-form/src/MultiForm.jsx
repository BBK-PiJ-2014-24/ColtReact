import React, { Component } from 'react'

class MultiForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(){
        alert(`Full Name: ${this.state.firstName} ${this.state.lastName}`);
    }

    handleChange(e){
        this.setState({
        [e.target.name]: e.target.value,
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input id="firstName" 
                       name="firstName" 
                       type="text" 
                       value={this.state.firstName}
                       onChange={this.handleChange}    
                       />

                <label htmlFor="lastName">Last Name: </label>
                <input id="lastName" 
                       name="lastName" 
                       type="text" 
                       value={this.state.lastName}
                       onChange={this.handleChange}    
                       />
                <button>Add Name</button>
            </form>
        );
    }


}

export default MultiForm;
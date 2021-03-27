import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SearchForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            query:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({query: e.target.value});
    }

    handleClick(){
       alert('SAVED DATA');
       this.props.history.push(`/food/${this.state.query}`);
    }

    render(){
        return (
            <div>
                <h1>Search For Food: </h1>
                <input type='text' 
                       placeholder='Search for Food'
                       name={this.state.query}
                       onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`}>Select</Link>
                <button onClick={this.handleClick} >Save</button>
            </div>
        );
    }
}

export default SearchForm;
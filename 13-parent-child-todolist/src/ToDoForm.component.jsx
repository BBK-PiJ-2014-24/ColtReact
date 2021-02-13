import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import './ToDoForm.css';

class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state={
            task: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const newTodo = {...this.state, id: uuid(), completed: false};
        this.props.createTodoItem(newTodo);
        // clear Item
        this.setState({task: ""});
    }

    render(){
        return (
            <form className='NewTodoForm' action="" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input type="text"
                    id="task"
                    name="task" 
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="New Todo"
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default TodoForm;
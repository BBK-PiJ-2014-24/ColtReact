import React, { Component } from 'react';
import './ToDoItem.css';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.state={
            isEditing: false,
            task: this.props.task,
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleClick(){
        this.props.removeTodoItem(this.props.id);
    }

    toggleForm(){
        this.setState(
            {isEditing : !this.state.isEditing} 
        );    
    }

    handleUpdate(e){
        e.preventDefault();
        this.props.updateTodoItem(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }

    handleChange(e){
        this.setState(
            {[e.target.name]: e.target.value}
        );
    }

    handleToggle(e){
        this.props.toggleCompleted(this.props.id);
    }

    render(){
        let  result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input type="text"
                               name='task'
                               value={this.state.task} 
                               onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
            <div className="Todo">
                <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                    onClick={this.handleToggle}>{this.props.task}</li>
                <div className='Todo-buttons'>
                    <button onClick={this.toggleForm}>
                        <i className='fas fa-pen'></i>
                    </button>
                    <button onClick={this.handleClick}>
                        <i className='fas fa-trash'></i>
                    </button>
                </div>
            </div>
           );
        }
        return result;
    }
}

export default TodoItem;
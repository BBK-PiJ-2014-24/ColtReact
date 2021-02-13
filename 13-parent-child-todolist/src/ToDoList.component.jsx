import React, { Component } from 'react';
import TodoForm from './ToDoForm.component';
import TodoItem from './ToDoItem.component';
import './ToDoList.css';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state={
            todos: [],
        };
        this.createTodoItem = this.createTodoItem.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
        this.updateTodoItem = this.updateTodoItem.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }    

    createTodoItem(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo ]
        });
    }

    removeTodoItem(id){
        this.setState({
            todos: this.state.todos.filter(td => td.id !== id)
        });
    }

    updateTodoItem(id, updatedTask){
        const updatedTodos = this.state.todos.map(td => {
            if(td.id=== id){
                return {...td, task: updatedTask};
            }
            return td;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompleted(id){
        const updatedTodos = this.state.todos.map(td => {
            if(td.id ===id){
                return {...td, completed: !td.completed};
            }
            return td;
        });
        this.setState({todos: updatedTodos})
    }

    render() {
        const todos = this.state.todos.map(td => (
            <TodoItem task={td.task} 
                      key={td.id} 
                      id={td.id} 
                      completed={td.completed}
                      removeTodoItem={this.removeTodoItem}
                      updateTodoItem={this.updateTodoItem}
                      toggleCompleted={this.toggleCompleted}
            />
        ));
        return(
            <div className='TodoList'>
                <h1>ToDo List!<span>Simple React ToDo App</span></h1>
                {todos}
                <TodoForm createTodoItem={this.createTodoItem}/>
            </div>
        );
    }
}

export default TodoList;
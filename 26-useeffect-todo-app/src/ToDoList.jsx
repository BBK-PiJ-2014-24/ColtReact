import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ToDo from './ToDo';

// Note the use of <> which is shorthand for a fragment
function TodoList(props) {
    if(props.todos.length){
        return(
            <Paper>
                <List>
                {props.todos.map((todo, idx) => (
                    <>
                        <ToDo id={todo.id}
                            task={todo.task}  
                            completed={todo.completed}    
                            key={todo.id} 
                            removeTodo={props.removeTodo}
                            toggleTodoCompletion={props.toggleTodoCompletion}
                            editTodo={props.editTodo}
                            />
                        {idx < props.todos.length-1 && <Divider /> }
                    </>
                ))}
                </List>
            </Paper>
        );
    } else {
        return null;
    }

}

export default TodoList;
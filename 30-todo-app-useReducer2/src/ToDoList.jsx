import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ToDo from './ToDo';
import {ToDosContext} from './contexts/ToDos.context';

// Note the use of <> which is shorthand for a fragment
function TodoList(props) {

    const todos = useContext(ToDosContext);

    if(todos.length){
        return(
            <Paper>
                <List>
                {todos.map((todo, idx) => (
                    <>
                        <ToDo id={todo.id}
                              task={todo.task}  
                              completed={todo.completed}
                              key={todo.id}
                            />
                        {idx < todos.length-1 && <Divider /> }
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
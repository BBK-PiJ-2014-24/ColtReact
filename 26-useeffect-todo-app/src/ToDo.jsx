import React, { Component } from 'react';
import useToggle from './hooks/useToggle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ListItemSecondaryAction } from '@material-ui/core';
import EditToDoForm from './EditToDoForm';

function ToDo(props){

    const [isEditing, toggleIsEditing] = useToggle(false);

    
    return(
        <ListItem style={{height: '64px'}}>
        {isEditing ? <EditToDoForm id={props.id}
                                   task={props.task}
                                   editTodo={props.editTodo}
                                   toggleEditForm={toggleIsEditing}
                                   /> :
            <>
                <Checkbox checked={props.completed} 
                        onClick={()=> props.toggleTodoCompletion(props.id)} 
                        tabIndex={-1} />
                <ListItemText style={{textDecoration: props.completed ? 'line-through' : 'none'}} >
                    {props.task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='delete-task' 
                                onClick={()=>props.removeTodo(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='edit-task'
                                onClick={toggleIsEditing} >
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>
        }
        </ListItem>
    );
}

export default ToDo;
import React, {useContext} from 'react';
import useFormState from './hooks/useFormState';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {ToDosContext} from './contexts/ToDos.context'


function ToDoForm(props){

    const [value, handleChange, reset] = useFormState('');
    const {dispatch} = useContext(ToDosContext);
    return(
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={ (e) => {
                e.preventDefault();
                dispatch({type: 'ADD-TODO', task: value })
                reset();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin='normal' 
                    label='Add New Todo'   
                    fullWidth 
                    />
            </form>
        </Paper>
    );
}

export default ToDoForm;
import React, { useContext } from 'react';
import useFormState from './hooks/useFormState';
import TextField from '@material-ui/core/TextField';
import {ToDosContext} from './contexts/ToDos.context'

function EditToDoForm(props){

    const {editTodo} = useContext(ToDosContext);

    const [value, handleChange, reset] = useFormState(props.task);

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(props.id, value);
            reset();
            props.toggleEditForm(); 
        }}  
            style={{
                marginLeft: '1rem',
                width: '100%',
            }}
        >
            <TextField  value={value}
                        onChange={handleChange}
                        fullWidth
                        autoFocus
                        margin='normal' />
        </form>
    );
}

export default EditToDoForm;
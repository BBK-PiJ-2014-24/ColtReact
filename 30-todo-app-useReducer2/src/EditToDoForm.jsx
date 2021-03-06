import React, { useContext } from 'react';
import useFormState from './hooks/useFormState';
import TextField from '@material-ui/core/TextField';
import {DispatchContext} from './contexts/ToDos.context'

function EditToDoForm(props){

    const dispatch = useContext(DispatchContext);

    const [value, handleChange, reset] = useFormState(props.task);

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({type: 'EDIT-TODO', id: props.id, newTask: value})
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
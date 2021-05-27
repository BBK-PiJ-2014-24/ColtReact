import { useState } from 'react';

function useFormState(initialVal){
    
    const [value, setValue]= useState(initialVal);

    function handleChange(e){
        setValue(e.target.value);
    }

    function reset(){
        setValue('');
    }
    
    return [value, handleChange, reset];
}

export default useFormState;

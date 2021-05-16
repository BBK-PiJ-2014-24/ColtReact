
import React from 'react';
import useFormState from './hooks/useFormState';

function HookFormAdvanced(props){

    const [email, handleEmail, resetEmail] = useFormState('');

    return(
        <div>
            <h1>Echo Advanced Hook Email: {email} </h1>  
            <input type="text"
                   value={email} 
                   onChange={handleEmail}    
                   />
            <button onClick={resetEmail}>RESET</button>       
        </div>
    );

}

export default HookFormAdvanced;

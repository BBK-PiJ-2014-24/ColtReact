import React, { useState } from 'react';

function HookForm(props){

    const [email, setEmail] = useState('');

    function handleChange(e){
        setEmail(e.target.value);
    }

    return(
        <div>
            <h1>Echo Hook Email: {email} </h1>  
            <input type="text"
                   value={email} 
                   onChange={handleChange}    
                   />
        </div>
    );

}

export default HookForm;

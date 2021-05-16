import React, {useState} from 'react';


function HookCounter(props){
 
// Hook: [state variable, function to change state]
    const [count, setCount] = useState(0); 

    function incrementCount(){
        let lamda = count +2;
        setCount(lamda);
    }

    return(
        <div>
            <h1>The Count is: {count}</h1>
            <button onClick={incrementCount}> Add +2</button>
        </div>
    );
}

export default HookCounter;
import React from 'react';
import useToggle from './hooks/useToggle';

function Toggle(){

    const [isCoinHead, toggleCoinHead] = useToggle(true);
    const [isOn, toggleIsOn] = useToggle(true);
    
    

    return(
        <div>
            <h1>Coin Toss: {isCoinHead ? 'Heads' : 'Tails'}</h1>
            <button onClick={toggleCoinHead}>COIN TOSS</button>
            <h1>Machine On: {isOn ? 'ON' : 'OFF'}</h1>
            <button onClick={toggleIsOn}>MACHINE ON/OFF</button>
        </div>
    );
}


export default Toggle;
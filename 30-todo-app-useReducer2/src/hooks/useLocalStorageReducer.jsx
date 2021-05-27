
import {useReducer, useEffect} from 'react';

function useLocalStorageReducer(key, defaultVal, reducer){

    // make a state variable with initialiaztion from  either localStorage or default value
    const [state, dispatch] = useReducer(reducer, defaultVal, ()=>{
                let val;
                try {
                    val = JSON.parse( window.localStorage.getItem(key) || String(defaultVal) );
                } catch(e){
                    val = defaultVal;
                }
                return val;
            });

    // implement useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key] );

    return [state, dispatch];

}

export  {useLocalStorageReducer};
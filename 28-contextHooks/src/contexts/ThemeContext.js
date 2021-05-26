import React, { createContext, Component } from 'react';
import useToggle from '../hooks/useToggle';

export const ThemeContext =  createContext();

export function ThemeProvider(props) {

    const[isDarkMode, toggleIsDarkMode] = useToggle(false);


    function toggleTheme(){
        toggleIsDarkMode();
    }

    return(
        <ThemeContext.Provider value={{isDarkMode: isDarkMode, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );

}
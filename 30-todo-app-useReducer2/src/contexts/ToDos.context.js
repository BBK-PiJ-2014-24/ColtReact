import React, {createContext, useReducer} from 'react';
import useToDoState from '../hooks/useToDoState'; 
import toDoReducer from '../reducers/ToDo.reducer';

const defaultValues = [
  {id:1, task: 'Clean fish tank', completed: false},
  {id:2, task: 'Wash Car', completed:  true},
  {id:3, task: 'Haircut', completed: false},
];

export const ToDosContext = createContext();

export function ToDosProvider(props){

    // const todosStuff  = useToDoState(defaultValues);
    const [todos, dispatch] = useReducer(toDoReducer, defaultValues);

    return (
        <ToDosContext.Provider value={{todos, dispatch}}  >
            {props.children}
        </ToDosContext.Provider>
    )
}
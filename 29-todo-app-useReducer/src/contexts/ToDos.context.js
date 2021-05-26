import React, {createContext} from 'react';
import useToDoState from '../hooks/useToDoState'; 

const defaultValues = [
  {id:1, task: 'Clean fish tank', completed: false},
  {id:2, task: 'Wash Car', completed:  true},
  {id:3, task: 'Haircut', completed: false},
];

export const ToDosContext = createContext();

export function ToDosProvider(props){

    const todosStuff  = useToDoState(defaultValues);

    return (
        <ToDosContext.Provider value={todosStuff}  >
            {props.children}
        </ToDosContext.Provider>
    )
}
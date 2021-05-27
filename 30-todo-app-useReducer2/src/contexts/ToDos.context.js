import React, {createContext, useReducer} from 'react';
import useToDoState from '../hooks/useToDoState'; 
import toDoReducer from '../reducers/ToDo.reducer';

const defaultValues = [
  {id:1, task: 'Clean fish tank', completed: false},
  {id:2, task: 'Wash Car', completed:  true},
  {id:3, task: 'Haircut', completed: false},
];

// double context to avoid unecessary re-rendering on state change
export const ToDosContext = createContext();
export const DispatchContext = createContext();

export function ToDosProvider(props){

    // const todosStuff  = useToDoState(defaultValues);
    const [todos, dispatch] = useReducer(toDoReducer, defaultValues);

    return (
        <ToDosContext.Provider value={todos }  >
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </ToDosContext.Provider>
    )
}
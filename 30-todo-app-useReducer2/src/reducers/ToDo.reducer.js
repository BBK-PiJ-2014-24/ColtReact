import { v4 as uuidv4 } from 'uuid';

function reducer(state, action){

    switch(action.type){
        case "ADD-TODO":  
            return [...state, {id:uuidv4(), task: action.task, completed: false }];
        case 'REMOVE-TODO':
            return state.filter((td)=>(td.id !== action.id));
        case 'TOGGLE-TODO':
            return state.map((td)=>(td.id === action.id ? {...td, completed: !td.completed} : td ));
        case 'EDIT-TODO':
            return state.map( (td) => (td.id === action.id ? 
                                        {...td, task: action.newTask } : td 
                            ));   
        default:
            return state;    
    }
} 

export default reducer;
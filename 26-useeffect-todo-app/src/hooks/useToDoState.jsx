import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';


function useToDoState(initialTodos){

    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

    function addTodo(newTodoText){
        const id = uuidv4();
        setTodos([...todos, {id:id, task: newTodoText, completed: false }]);
    }

    function removeTodo(todoId){
        const updatedTodo = todos.filter((td)=>(td.id !== todoId));
        setTodos(updatedTodo);
    }

    function toggleTodoCompletion(todoId){
        const updatedTodo = todos.map((td)=>(td.id === todoId ? {...td, completed: !td.completed} : td ));
        setTodos(updatedTodo);
    }

    function editTodo(todoId, newTask){
        const updatedTodo = todos.map( (td) => (td.id = todoId ? 
                                {...td, task: newTask } : td 
                                ));
        setTodos(updatedTodo);
    }

    return {
            todos, 
            addTodo: addTodo,
            removeTodo: removeTodo,
            toggleTodoCompletion: toggleTodoCompletion,
            editTodo: editTodo,
        }
}

export default useToDoState;
import React  from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import useToDoState from './hooks/useToDoState';

function ToDoApp(props){

        
    const initialTodos= [
            {id:1, task: 'Clean fish tank', completed: false},
            {id:2, task: 'Wash Car', completed:  true},
            {id:3, task: 'Haircut', completed: false},
        ];

    const {todos, addTodo, removeTodo, toggleTodoCompletion, editTodo} = useToDoState(initialTodos);

    return(
        <Paper style={{
            padding:0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa',
            }}  
            elevation={0} >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                   <Typography color='inherit'>TODO LIST</Typography> 
                </Toolbar>
            </AppBar>
            <Grid container justify='center' >
                <Grid item xs={11} md={8} lg={4}>
                    <ToDoForm addTodo={addTodo}/>
                    <ToDoList todos={todos} 
                              removeTodo={removeTodo}
                              toggleTodoCompletion={toggleTodoCompletion}
                              editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper> 
    );
}

export default ToDoApp;
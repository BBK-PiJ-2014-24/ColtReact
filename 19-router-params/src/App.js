import './App.css';
import {Route, Switch} from 'react-router-dom';
import Food from './Food.component';
import SearchForm from './SearchForm.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(routerProps) => <SearchForm {...routerProps}/>} />
        <Route exact path='/food/:name' 
           render={ (routerProps)=> <Food {...routerProps} /> } 
        />
        <Route render={()=> <h1>Error: Page Not Found</h1> } />
      </Switch>
    </div>
  );
}

export default App;

// render={ (routerProps)=> <Food name={routerProps.match.params.name} /> } 
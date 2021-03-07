import {Route, Switch, NavLink} from 'react-router-dom';
import About from './About.component';
import Contact from './Contact.context';
import Dog from './Dog.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
        <NavLink exact activeClassName='active-link' to='/dog'>Dog</NavLink>
        <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/dog" render={() => <Dog name='Baxter' />} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

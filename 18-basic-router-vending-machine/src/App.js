import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar/Navbar.component';
import VendingMachine from './VendingMachine/VendingMachine.component'
import Chips from './Chips/Chips.component'
import Sardines from './Sardines/Sardines.component'
import Soda from './Soda/Soda.component'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/chips' render={() => <Chips />} />
        <Route exact path='/sardines' render={() => <Sardines />} />
        <Route exact path='/soda' render={() => <Soda />} />
      </Switch>
    </div>
  );
}

export default App;

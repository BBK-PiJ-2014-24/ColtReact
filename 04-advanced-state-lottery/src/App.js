import logo from './logo.svg';
import './App.css';
import Lottery from './components/lottery/Lottery.component';
import Ball from './components/ball/Ball.component';

function App() {
  return (
    <div className="App">

     <Lottery />
     <Lottery title='Mini Lotto' maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;

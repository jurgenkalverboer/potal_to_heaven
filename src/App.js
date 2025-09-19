import logo from './logo.svg';
import './App.css';
import {Card} from './views/Card.js'

function App() {
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <Card hero={{
          "name": "Rotator 1",
          "velocity": 300,
          "up" : 1,
          "lr": 2,
          "range": "full",
          "damage": 0,
          "active": "direct",
          "health": 3,
          "info": "Rotate a single enemy"
      }}></Card>
    </div>
  );
}

export default App;

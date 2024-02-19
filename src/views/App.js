import logo from './logo.svg';
import './App.scss';
import MyCpnTest from './examples/MyCpnTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          haha, hello world.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyCpnTest> </MyCpnTest>
      </header>
    </div>
  );
}

export default App;

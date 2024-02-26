import logo from './logo.svg';
import './App.scss';
import MyCpnTest from './examples/MyCpnTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lê Phúc Hưng, hello world.
        </p>
        <MyCpnTest> </MyCpnTest>
      </header>
    </div>
  );
}

export default App;

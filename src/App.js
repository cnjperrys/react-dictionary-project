import logo from './logo-light.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} classname="App-logo-light img-fluid" alt="cjp logo" />
      
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
       <small>Coded by Courtney J. Perry</small> 
      </footer>
      </div>
    </div>
  );
}

export default App;

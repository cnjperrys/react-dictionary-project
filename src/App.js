import logo from './logo-cjp.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="cjp logo" />   
      </header>
      <main>
      <Dictionary  defautlKeyword="coffee" />
      </main>
      <footer className="App-footer">
       <small>Coded by Courtney Perry</small> 
      </footer>
      </div>
    </div>
  );
}

export default App;

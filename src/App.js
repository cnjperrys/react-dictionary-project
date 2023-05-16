
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
         <main className="Dictionaary">
      <Dictionary  defautlKeyword="hello" />
      </main>
      </header>
     
      <footer className="App-footer">
       <small>Coded by Courtney J Perry and open-sourced on<a href="https://github.com/cnjperrys/react-dictionary-project">Github</a></small> 
      </footer>
      </div>
    </div>
  );
}

export default App;

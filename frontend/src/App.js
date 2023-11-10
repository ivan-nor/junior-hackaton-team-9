/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App(){
  const [state, setState] = useState("");
  const request = async () => {
    const api_request = await fetch(`/api/demo/`);
    console.log(`${encodeURIComponent('/api/demo/')}`);
    const response = await api_request.text();
    console.log(response);
    setState(response);
    console.log(state);
    return state;
  }

  const a = request() || "пусто" ;

  return (
    <div className="App">
      <header className="App-header">
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
        </a>
        <p>{state}</p>
      </header>
    </div>
  );
}

export default App;

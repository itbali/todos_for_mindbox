import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <div className="App">
      <h1>
        todos
      </h1>
      <Todolist/>
    </div>
  );
}

export default App;

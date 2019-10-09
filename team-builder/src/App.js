import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListForm from "./Form";
import Team from "./TeamBuild";

function App() {
  const [list, setList] = useState([{
    name:"Rosa",
    email:"rosa@gmail.com",
    role: "backend engineer",
  }]);


const addList = list => {
  const newList = {
    name: Date.now(),
    email: list.email,
    role: list.role,
  }
  setList([...list, newList])
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>team builder</h1>
        <ListForm addListfn={addList}/>
        <Team teamList={list}/>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
     
    </div>
  );
}

export default App;

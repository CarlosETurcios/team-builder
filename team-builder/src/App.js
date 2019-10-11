import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListForm from "./Form";
import Team from "./TeamBuild";

function App() {
  const [lists, setList] = useState([{
    name:"Carlos",
    email:"carlos@email.com",
    role: "backend engineer",
  }]);


const addList = list => {
  const newList = {
    id:Date.now(),
    name:list.name,
    email: list.email,
    role: list.role,
  }
  setList([...lists, newList])
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
        <ListForm addListFn={addList}/>
        <Team teamList={lists}/>
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

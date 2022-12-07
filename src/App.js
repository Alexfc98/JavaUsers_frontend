import logo from "./logo.svg";
import "./App.css";
import FormUser from "./Components/FormUser";
import { useState } from "react";
import axios from "axios";
import ListUsers from "./Components/ListUsers";
import { useEffect } from "react";
import "./Components/CreateUserButton.css"
function App() {
  const [w, setW] = useState(false);
  const [w1, setW1] = useState(false);
  function createUserWind2(e) {
    console.log(e);
    setW1(true);
  }
  function createUserWind(e) {
    console.log(e);
    setW(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="button-85" onClick={createUserWind}>Create User</button>
        <button className="button-85" onClick={createUserWind2}>View Users</button>
        {w1 && <ListUsers setW1={setW1}/> }
       
        {w && <FormUser setW={setW}> </FormUser>}
      </header>
    </div>
  );
}

export default App;

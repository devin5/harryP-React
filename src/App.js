import React, {useState} from 'react';
import './App.css';
import AllStudents from "./components/AllStudents"

function App() {

  const [boolean, setBoolean] = useState(false)

  const clickMe = () => {
    setBoolean(!boolean)
  }
  console.log(boolean)
  return (
    <div className="App">
    <button onClick={clickMe}></button>
    <AllStudents bool={boolean}/*className= { boolean ? "display" : null}*//>
    </div>
  );
}

export default App;

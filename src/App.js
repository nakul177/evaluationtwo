import logo from './logo.svg';
import './App.css';

import {AddHouse} from "./Components/AddHouse/AddHouse.jsx"
import {Rentals} from "./Components/Rentals/Rentals.jsx"
import { useState } from 'react';

function App() {
  const [show , setShow] = useState(false)
  return (
        <div className="App">
      <button className="toggleForm" onClick={() =>{
        setShow(!show)
      }}>
        {show ? "House Data" :  "From "}
      </button>
      {show ? <AddHouse /> : <Rentals />   }
      <br />
  
     
    </div>
  );
}

export default App;

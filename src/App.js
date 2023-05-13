import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

import React, { Component }  from 'react';


import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
// Switch -> Routes

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
 
  const toggleMode = () =>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!", "success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled!", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar heading="Nav heading" aboutContent = "About App" toggleMode={toggleMode} mode = {mode}/>
    <Alert alert={alert}/>
    <div className="container">
      
      <Routes>
        <Route exact path='/about' element = {<About/>}>
        </Route>

        <Route exact path='/' element = {<TextForm mode = {mode} heading = "Enter text below:" showAlert={showAlert}/>}>
        </Route>

      </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;

// To install react router:
// npm install react-router-dom
// https://reactrouter.com/en/6.11.1/start/tutorial#adding-a-router
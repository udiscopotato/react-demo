import About from "./components/About";
import React, { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [darkMode,setDarkMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(darkMode === 'light'){
      setDarkMode('dark')
      document.body.style.backgroundColor = 'grey'
      document.title = "Text Utils - Dark Mode"
    }else{
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      document.title =  "Text Utils";
    }
  }
  
  // const showAlert =(message, type) =>{
  //   setAlert({
  //     message: message,
  //     type : type
  //   })
  // }


  return (
    <>
    <Router>
    <Navbar title="Subham" mode={darkMode} toggle={toggleMode}/>
    {/* <Alert thing={alert}/> */}
    <Routes>
        <Route path="/" element={<Form heading="Enter the Texts to Analyse"  mode={darkMode} /*alert={showAlert}*/ />}/>
        <Route path="/home" element={<Form heading="Enter the Texts to Analyse"  mode={darkMode} />} />
        <Route path="/about" element={<About />}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;

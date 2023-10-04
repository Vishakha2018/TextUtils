import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
 import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
      // for dynamic title change of app
      // document.title = "TextUtils - Light Mode"
      // we can moderate title while using interval like adds are comming in 2 secs
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing"
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils Now"
      // },1500);
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "success")
      // for dynamic title change of app
      // document.title = "TextUtils - Dark Mode"

    }
  }
  return (
    <>
             {/* <Navbar title="MyTextUtils" mode={mode} toggleMode={toggleMode} />
             <Alert alert={alert} />
             <TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert} /> */}



    {/* Routing is used for single page link with multiple page by navigation for single page application */}
      <Router>
        <Navbar title="MyTextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
        {/* we are using exact path so react will completely match otherwise it will partially match
        /users -->component1
        /users/about  --> component2  */}
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Try Textutils - Word Counter | Character Counter" mode={mode} alert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

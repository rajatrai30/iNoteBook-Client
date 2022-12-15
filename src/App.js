import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import AddNote from './Components/AddNote';

const App = () => {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'iNoteBook | Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'iNoteBook | Light Mode';
    }
  }


  return (
    <>
      <NoteState mode={mode} showAlert={showAlert}>
        <Router>
          <Navigation about="About" mode={mode} handleDarkMode={handleDarkMode} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} mode={mode}  />} />
              <Route exact path="/about" element={<About showAlert={showAlert} mode={mode} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} mode={mode} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} mode={mode} />} />
              <Route exact path="/addnote" element={<AddNote showAlert={showAlert} mode={mode} />} />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  )
}
export default App;
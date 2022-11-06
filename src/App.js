import Login from "./component/Login";
import Register from "./component/Register";
import "./style.css";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Learn from "./learn";
import HorizontalLinearStepper from "./TestMUI";

function App() {
  
    return (
      <HorizontalLinearStepper/>
    // <Router>
    //   <Routes>
    //   <Route path="/home" index element={<Home />} /> 
    //   <Route path="/login" element={<Login />} /> 
    //   <Route path="/register" element={<Register />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

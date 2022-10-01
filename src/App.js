import Login from "./component/Login";
import Register from "./component/Register";
import "./style.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Router>
  );
}
export default App;

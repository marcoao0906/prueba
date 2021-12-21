import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
//import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//import {fragment} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>;
          <Route path="/proyectos" element={<Projects/>}/>;
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App;

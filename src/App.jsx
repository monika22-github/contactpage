import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <span>
      <ul>
        <li>
          
            <Link to="/Home">
              <b>Monika Verma </b>Learner
            </Link>
        
        </li>
      </ul></span>

      <nav className=" top-0 ">
        <ul className="flex space-x-10 float-right justify text-lg  p-10 ">
          <li>
            <Link to="/Resume">Resume </Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul></nav>
        <div className="mx-5">

        <Routes>
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes></div>
      
    </div>
  );
};

export default App;

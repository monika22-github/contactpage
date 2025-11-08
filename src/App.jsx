import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import React from "react";  
import {Link} from "react-router-dom";  








const App = () => {

    return (
        <div>
            <nav>
            <h1><b>Monika Verma </b>Learner</h1>
                
            <ul className="flex space-x-10" >
                <li><Link to="/Resume">Resume </Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
       
            
            
<Routes>  

    <Route path="/Nav" element={<Nav />} />
   <Route path="/Resume" element={<Resume />} />
   <Route path="/Projects" element={<Projects />} />
    <Route path="/Contact" element={<Contact />} />

</Routes></nav>

<Hero />
</div>








    )







  }
  
  
  export default App;

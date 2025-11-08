import React from "react";  
import {Link} from "react-router-dom";  

const Nav = () => {
    return (
        <nav >
            <ul className="flex space-x-10" >
                <li><Link to="/Resume">Resume </Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
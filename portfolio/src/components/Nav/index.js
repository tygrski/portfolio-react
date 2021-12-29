import React, { useState } from "react";
import { Link } from "react-router-dom";


function Nav(props) {
 
    return(
    <nav>
        <ul>
            <li>
               <Link to="/about-me">About Me</Link>
           </li>
            <li>
             <Link to="/projects">Projects</Link>
           </li>
           <li>
             <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
   </nav>
    )
 }

export default Nav;
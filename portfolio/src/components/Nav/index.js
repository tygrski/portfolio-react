import React, { useState } from "react";

function Nav(props) {
 
    return(
    <nav>
        <ul>
            <li>
               <a  href="#about-me"  ><span className= "navlnk">About Me</span></a>
           </li>
            <li>
               <a href="#Projects"><span className="navlnk">Projects</span></a>
           </li>
           <li>
           <a href= "#my-resume"><span className="navlnk">Resume</span></a>
            </li>
            <li>
           <a href= "#contact-me"><span className="navlnk">Contact</span></a>
            </li>
        </ul>
   </nav>
    )
 }

export default Nav;
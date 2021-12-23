import React from "react";

function Nav() {
    return(
    <nav>
        <ul>
            <li>
               <a href="#about-me"><span className= "navlnk">About Me</span></a>
           </li>
            <li>
               <a href="#my-work"><span className="navlnk">My Work</span></a>
           </li>
            <li>
           <a href= "#contact-me"><span className="navlnk">Contact Me</span></a>
            </li>
        </ul>
   </nav>
    )
}

export default Nav;